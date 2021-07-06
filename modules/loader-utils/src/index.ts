import * as fs  from './lib/node/fs';

// TYPES
export type {
  Loader,
  LoaderWithParser,
  LoaderContext,
  LoaderOptions,
  Writer,
  WriterOptions,
  DataType,
  SyncDataType,
  BatchableDataType,
  IFileSystem,
  IRandomAccessReadFileSystem
} from './types';

export type {IncrementalTransform} from './lib/iterator-utils/incremental-transform';

// GENERAL UTILS
export {assert} from './lib/env-utils/assert';
export {
  isBrowser,
  isWorker,
  nodeVersion,
  self,
  window,
  global,
  document
} from './lib/env-utils/globals';

// LOADERS.GL-SPECIFIC WORKER UTILS
export {createLoaderWorker} from './lib/worker-loader-utils/create-loader-worker';
export {parseWithWorker, canParseWithWorker} from './lib/worker-loader-utils/parse-with-worker';
export {makeTransformIterator} from './lib/iterator-utils/make-transform-iterator';

// PARSER UTILS
export {parseJSON} from './lib/parser-utils/parse-json';

// MEMORY COPY UTILS
export {
  toArrayBuffer,
  sliceArrayBuffer,
  concatenateArrayBuffers,
  concatenateTypedArrays,
  compareArrayBuffers
} from './lib/binary-utils/array-buffer-utils';
export {padToNBytes, copyToArray, copyArrayBuffer} from './lib/binary-utils/memory-copy-utils';
export {
  copyPaddedArrayBufferToDataView,
  copyPaddedStringToDataView
} from './lib/binary-utils/binary-copy-utils';
export {
  padStringToByteAlignment,
  copyStringToDataView,
  copyBinaryToDataView
} from './lib/binary-utils/encode-utils';
export {getFirstCharacters, getMagicString} from './lib/binary-utils/get-first-characters';

// ITERATOR UTILS
export {
  makeTextEncoderIterator,
  makeTextDecoderIterator,
  makeLineIterator,
  makeNumberedLineIterator
} from './lib/iterator-utils/text-iterators';
export {forEach, concatenateArrayBuffersAsync} from './lib/iterator-utils/async-iteration';

// REQUEST UTILS
export {default as RequestScheduler} from './lib/request-utils/request-scheduler';

// NODE `path`` REPLACEMENT
import * as path from './lib/path-utils/path';
export {path};
export {setPathPrefix, getPathPrefix, resolvePath} from './lib/path-utils/file-aliases';
export {addAliases as _addAliases} from './lib/path-utils/file-aliases';

// NODE `fs` WRAPPERS
export {fs};

// NODE `buffer` WRAPPERS
export {isBuffer, toBuffer, bufferToArrayBuffer} from './lib/binary-utils/buffer-utils';

// MESH CATEGORY UTILS
// Note: Should move to category specific module if code size increases
export {getMeshSize as _getMeshSize, getMeshBoundingBox} from './categories/mesh/mesh-utils';
export type _Attributes = import('./categories/mesh/mesh-utils').Attributes;

export {JSONLoader} from './json-loader';
