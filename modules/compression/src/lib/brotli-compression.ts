// BROTLI
import type {CompressionOptions} from './compression';
import {Compression} from './compression';
import type brotliNamespace from 'brotli';
// import brotli from 'brotli';  // https://bundlephobia.com/package/brotli

export type BrotliCompressionOptions = CompressionOptions & {
  brotli?: {
    mode?: number;
    quality?: number;
    lgwin?: number;
  };
};

const DEFAULT_BROTLI_OPTIONS = {
  brotli: {
    mode: 0,
    quality: 8,
    lgwin: 22
  }
};

let brotli: typeof brotliNamespace;

/**
 * brotli compression / decompression
 */
export class BrotliCompression extends Compression {
  readonly name: string = 'brotli';
  readonly isSupported = true;
  readonly extensions = ['br'];
  readonly contentEncodings = ['br'];
  readonly options: BrotliCompressionOptions;

  constructor(options: BrotliCompressionOptions) {
    super(options);
    this.options = options;
  }

  /**
   * brotli is an injectable dependency due to big size
   * @param options
   */
  async preload(): Promise<void> {
    brotli = brotli || this.options?.modules?.brotli;
    if (!brotli) {
      throw new Error(this.name);
    }
  }

  async compress(input: ArrayBuffer): Promise<ArrayBuffer> {
    const brotliOptions = {...DEFAULT_BROTLI_OPTIONS.brotli, ...this.options?.brotli};
    const inputArray = new Uint8Array(input);
    // return brotli.compress(inputArray, brotliOptions);
    return input;
  }

  async decompress(input: ArrayBuffer): Promise<ArrayBuffer> {
    const brotliOptions = {...DEFAULT_BROTLI_OPTIONS.brotli, ...this.options?.brotli};
    const inputArray = new Uint8Array(input);
    // return brotli.decompress(input, brotliOptions);
    return input;
  }
}
