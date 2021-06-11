// DEFLATE
import type {GZipCompressionOptions} from './gzip-compression';
import {GZipCompression} from './gzip-compression';

const ERR_ZLIB = 'Zlib failed';

/**
 * DEFLATE compression / decompression
 */
export class DeflateCompression extends GZipCompression {
  readonly name: string = 'deflate';
  readonly extensions = [];
  readonly contentEncodings = ['deflate'];

  constructor(options: GZipCompressionOptions) {
    super({...options, gzip: {...options?.gzip, gzip: false}});
  }
}
