// GZIP
import type {CompressionOptions} from './compression';
import {Compression} from './compression';
import pako from 'pako'; // https://bundlephobia.com/package/pako

export type GZipCompressionOptions = CompressionOptions & {
  gzip?: pako.InflateOptions & pako.DeflateOptions & {};
};

const DEFAULT_OPTIONS = {
  gzip: {
    gzip: true
  }
};

/**
 * GZIP compression / decompression
 */
export class GZipCompression extends Compression {
  readonly name: string = 'gzip';
  readonly extensions = ['gz', 'gzip'];
  readonly contentEncodings = ['gzip', 'x-gzip'];

  options: GZipCompressionOptions;

  private _chunks: ArrayBuffer[] = [];

  constructor(options?: GZipCompressionOptions) {
    super(options);
    // Set pako gzip option unless disabled (by DeflateCompression)
    const gzip = 'gzip' in (options?.gzip || {}) ? Boolean(options?.gzip) : true;
    // Ensure gzip flag is present
    options = {...options, gzip: {...options?.gzip, gzip}};
    this.options = options;
  }

  async compress(input: ArrayBuffer): Promise<ArrayBuffer> {
    const pakoOptions: pako.DeflateOptions = this.options?.gzip || {};
    const inputArray = new Uint8Array(input);
    return pako.deflate(inputArray, pakoOptions).buffer;
  }

  async decompress(input: ArrayBuffer): Promise<ArrayBuffer> {
    const pakoOptions: pako.InflateOptions = this.options?.gzip || {};
    const inputArray = new Uint8Array(input);
    return pako.inflate(inputArray, pakoOptions).buffer;
  }

  /*
  async *compressBatches(
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    const pakoOptions: pako.DeflateOptions = this.options?.gzip || {};
    const pakoProcessor = new pako.Deflate(pakoOptions);
    yield* this.transformBatches(pakoProcessor, asyncIterator);
  }

  async *decompressBatches(
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    const pakoOptions: pako.InflateOptions = this.options?.gzip || {};
    const pakoProcessor = new pako.Inflate(pakoOptions);
    yield* this.transformBatches(pakoProcessor, asyncIterator);
  }
  */

  async *transformBatches(
    pakoProcessor: pako.Inflate | pako.Deflate,
    asyncIterator: AsyncIterable<ArrayBuffer> | Iterable<ArrayBuffer>
  ): AsyncIterable<ArrayBuffer> {
    pakoProcessor.onData = this._onData.bind(this);
    pakoProcessor.onEnd = this._onEnd.bind(this);
    for await (const chunk of asyncIterator) {
      const uint8Array = new Uint8Array(chunk);
      const ok = pakoProcessor.push(uint8Array, false); // false -> not last chunk
      if (!ok) {
        throw new Error(`${this._getError()}write`);
      }
      const chunks = this._getChunks();
      yield* chunks;
    }

    // End
    const emptyChunk = new Uint8Array(0);
    const ok = pakoProcessor.push(emptyChunk, true); // true -> last chunk
    if (!ok) {
      // For some reason we get error but it still works???
      // throw new Error(this._getError() + 'end');
    }
    const chunks = this._getChunks();
    yield* chunks;
  }

  _onData(chunk) {
    this._chunks.push(chunk);
  }

  _onEnd(status) {
    if (status !== 0) {
      throw new Error(this._getError(status) + this._chunks.length);
    }
  }

  _getChunks(): ArrayBuffer[] {
    const chunks = this._chunks;
    this._chunks = [];
    return chunks;
  }

  // TODO - For some reason we don't get the error message from pako in _onEnd?
  _getError(code: number = 0): string {
    const MESSAGES = {
      /* Z_NEED_DICT       2  */
      2: 'need dictionary',
      /* Z_STREAM_END      1  */
      1: 'stream end',
      /* Z_OK              0  */
      0: '',
      /* Z_ERRNO         (-1) */
      '-1': 'file error',
      /* Z_STREAM_ERROR  (-2) */
      '-2': 'stream error',
      /* Z_DATA_ERROR    (-3) */
      '-3': 'data error',
      /* Z_MEM_ERROR     (-4) */
      '-4': 'insufficient memory',
      /* Z_BUF_ERROR     (-5) */
      '-5': 'buffer error',
      /* Z_VERSION_ERROR (-6) */
      '-6': 'incompatible version'
    };
    return `${this.name}: ${MESSAGES[code]}`;
  }
}
