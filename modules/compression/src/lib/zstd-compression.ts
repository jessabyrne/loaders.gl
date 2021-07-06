// ZSTD
import type {CompressionOptions} from './compression';
import {Compression} from './compression';
// import {ZstdCodec} from 'zstd-codec'; // https://bundlephobia.com/package/zstd-codec

let zstd;

/**
 * Zstandard compression / decompression
 */
export class ZstdCompression extends Compression {
  readonly name: string = 'zstandard';
  readonly extensions = [];
  readonly contentEncodings = [];
  readonly isSupported = true;
  readonly options: CompressionOptions;

  constructor(options: CompressionOptions) {
    super(options);
    this.options = options;
  }

  /**
   * zstd-codec is an injectable dependency due to big size
   * @param options
   */
  async preload(): Promise<void> {
    if (!zstd) {
      const ZstdCodec = this.options?.modules?.['zstd-codec'];
      if (!ZstdCodec) {
        throw new Error(this.name);
      }
      zstd = await new Promise((resolve) => ZstdCodec.run((zstd) => resolve(zstd)));
    }
  }

  async compress(input: ArrayBuffer): Promise<ArrayBuffer> {
    await this.preload();
    const simpleZstd = new zstd.Simple();
    const inputArray = new Uint8Array(input);
    return simpleZstd.compress(inputArray).buffer;
  }

  async decompress(input: ArrayBuffer): Promise<ArrayBuffer> {
    await this.preload();
    const simpleZstd = new zstd.Simple();
    // var ddict = new zstd.Dict.Decompression(dictData);
    // var jsonBytes = simpleZstd.decompressUsingDict(jsonZstData, ddict);
    const inputArray = new Uint8Array(input);
    return simpleZstd.decompress(inputArray).buffer;
  }
}
