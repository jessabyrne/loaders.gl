// SNAPPY (aka ZIPPY)
import type {CompressionOptions} from './compression';
import {Compression} from './compression';
import {compress, decompress} from 'snappyjs'; // https://bundlephobia.com/package/snappy

/**
 * Snappy/zippy compression / decompression
 */
export class SnappyCompression extends Compression {
  readonly name: string = 'snappy';
  readonly extensions = [];
  readonly contentEncodings = [];
  readonly options: CompressionOptions;

  constructor(options?: CompressionOptions) {
    super(options);
    this.options = options || {};
  }

  async compress(input: ArrayBuffer): Promise<ArrayBuffer> {
    // Accepts arrayBuffer - https://github.com/zhipeng-jia/snappyjs#usage
    return compress(input);
  }

  async decompress(input: ArrayBuffer): Promise<ArrayBuffer> {
    // Accepts arrayBuffer - https://github.com/zhipeng-jia/snappyjs#usage
    return decompress(input);
  }
}
