// Compression interface
import {concatenateArrayBuffersAsync} from '@loaders.gl/loader-utils';

/** Compression options */
export type CompressionOptions = {
  // operation: 'compress' | 'decompress';
  modules?: {[moduleName: string]: any};
};

/** Compression */
export abstract class Compression {
  abstract readonly name: string;
  abstract readonly extensions: string[];
  abstract readonly contentEncodings: string[];

  constructor(options?: CompressionOptions) {
    this.compressBatches = this.compressBatches.bind(this);
    this.decompressBatches = this.decompressBatches.bind(this);
  }

  async preload(): Promise<void> {
    return;
  }

  abstract compress(input: ArrayBuffer): Promise<ArrayBuffer>;
  abstract decompress(input: ArrayBuffer): Promise<ArrayBuffer>;

  async *compressBatches(
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    // TODO - implement incremental compression
    const input = await this.concatenate(asyncIterator);
    yield this.compress(input);
  }

  async *decompressBatches(
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    // TODO - implement incremental compression
    const input = await this.concatenate(asyncIterator);
    yield this.decompress(input);
  }

  // abstract compressBatches(
  //   asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  // ): AsyncIterable<ArrayBuffer>;
  // abstract decompressBatches(
  //   asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  // ): AsyncIterable<ArrayBuffer>;

  // HELPERS

  protected concatenate(asyncIterator): Promise<ArrayBuffer> {
    return concatenateArrayBuffersAsync(asyncIterator);
  }
}
