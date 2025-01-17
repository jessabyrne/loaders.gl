import type {Loader, LoaderWithParser, LoaderOptions} from '@loaders.gl/loader-utils';
import parseSync from './lib/parse-arrow-sync';
import {parseArrowInBatches} from './lib/parse-arrow-in-batches';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

export type ArrowLoaderOptions = LoaderOptions & {
  arrow?: {
    shape: 'arrow-table' | 'columnar-table' | 'row-table' | 'array-row-table' | 'object-row-table';
  };
};

const DEFAULT_ARROW_LOADER_OPTIONS = {
  arrow: {
    shape: 'columnar-table'
  }
};

/** ArrowJS table loader */
export const ArrowWorkerLoader: Loader = {
  name: 'Apache Arrow',
  id: 'arrow',
  module: 'arrow',
  version: VERSION,
  worker: true,
  category: 'table',
  extensions: ['arrow', 'feather'],
  mimeTypes: ['application/octet-stream'],
  binary: true,
  tests: ['ARROW'],
  options: DEFAULT_ARROW_LOADER_OPTIONS
};

/** ArrowJS table loader */
export const ArrowLoader: LoaderWithParser = {
  ...ArrowWorkerLoader,
  parse: async (arraybuffer: ArrayBuffer, options?: ArrowLoaderOptions) =>
    parseSync(arraybuffer, options),
  parseSync,
  parseInBatches: parseArrowInBatches
};
