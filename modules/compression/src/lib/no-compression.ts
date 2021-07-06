// NO COMPRESSION
import type {CompressionOptions} from './compression';
import {Compression} from './compression';

/**
 * Applies no compression.
 */
export class NoCompression extends Compression {
  readonly name: string = 'plain';
  readonly extensions: string[] = [];
  readonly contentEncodings: string[] = [];
  readonly isSupported = true;

  readonly options: CompressionOptions;

  constructor(options?: CompressionOptions) {
    super(options);
    this.options = options || {};
  }

  async compress(input: ArrayBuffer): Promise<ArrayBuffer> {
    return input;
  }

  async decompress(input: ArrayBuffer): Promise<ArrayBuffer> {
    return input;
  }

  async *compressBatches(
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    return yield* asyncIterator;
  }

  async *decompressBatches(
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    return yield* asyncIterator;
  }
}
