// LZO
import type {CompressionOptions} from './compression';
import {Compression} from './compression';
import {isBrowser} from '@loaders.gl/loader-utils';
// import lzo from 'lzo'; // https://bundlephobia.com/package/lzo

let lzo;

/**
 * Lempel-Ziv-Oberheimer compression / decompression
 */
export class LZOCompression extends Compression {
  readonly name = 'lzo';
  readonly extensions = [];
  readonly contentEncodings = [];
  readonly isSupported = isBrowser;
  readonly options: CompressionOptions;

  constructor(options: CompressionOptions) {
    super(options);
    this.options = options;
  }

  /**
   * zstd-codec is an injectable dependency due to big size
   * @param options
   */
  async preload(): Promise<any> {
    lzo = lzo || this.options?.modules?.lzo;
    if (!lzo) {
      throw new Error(this.name);
    }
  }

  async compress(input: ArrayBuffer): Promise<ArrayBuffer> {
    await this.preload();
    // const inputArray = new Uint8Array(input);
    return lzo.compress(input).buffer;
  }

  async decompress(input: ArrayBuffer): Promise<ArrayBuffer> {
    await this.preload();
    // const inputArray = new Uint8Array(input);
    return lzo.decompress(input).buffer;
  }
}
