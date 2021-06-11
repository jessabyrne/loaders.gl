import test from 'tape-promise/tape';
import {
  NoCompression,
  GZipCompression,
  DeflateCompression,
  LZ4Compression,
  ZstdCompression,
  SnappyCompression,
  BrotliCompression,
  LZOCompression
} from '@loaders.gl/compression';
import {
  isBrowser,
  concatenateArrayBuffers,
  concatenateArrayBuffersAsync
} from '@loaders.gl/loader-utils';
// import {processOnWorker} from '@loaders.gl/worker-utils';
import {getData, compareArrayBuffers} from './utils/test-utils';

// Import big dependencies
import ZstdCodec from 'zstd-codec';
// import lzo from 'lzo';
import brotliCompress from 'brotli/compress';
// import brotliDecompress from 'brotli/decompress';
// import brotli from 'brotli';
const brotli = {
  compress: brotliCompress,
  decompress: () => {
    throw new Error('brotli decompress');
  }
};

// Inject large dependencies through Compression constructor options
const modules = {
  'zstd-codec': ZstdCodec,
  brotli
  // lzo
};

const COMPRESSIONS = [
  {compression: new NoCompression({modules})},
  {compression: new GZipCompression({modules})},
  {compression: new DeflateCompression({modules})},
  {compression: new LZ4Compression({modules})},
  {compression: new ZstdCompression({modules})},
  {compression: new SnappyCompression({modules})},
  {compression: new BrotliCompression({modules})}
];

if (!isBrowser) {
  COMPRESSIONS.push({compression: new LZOCompression({modules})});
}

test('compression#atomic', async (t) => {
  const {binaryData, repeatedData} = getData();
  for (const compression of [new GZipCompression({modules})]) {
    let deflatedData = await compression.compress(binaryData);
    let inflatedData = await compression.decompress(deflatedData);
    t.ok(compareArrayBuffers(binaryData, inflatedData), 'deflate/inflate default options');

    t.equal(repeatedData.byteLength, 100000, 'Repeated data length is correct');
    deflatedData = await compression.compress(repeatedData);

    t.equal(deflatedData.byteLength, 10915, 'Repeated data compresses well');
    inflatedData = await compression.decompress(deflatedData);
    t.equal(inflatedData.byteLength, 100000, 'Inflated data length is correct');
    t.ok(compareArrayBuffers(repeatedData, inflatedData), 'deflate/inflate default options');
  }
  t.end();
});

test('compression#batched', async (t) => {
  const inputChunks = [
    new Uint8Array([1, 2, 3]).buffer,
    new Uint8Array([4, 5, 6]).buffer,
    new Uint8Array([7, 8, 9]).buffer
  ];

  for (const compression of [new GZipCompression({modules})]) {
    // Test empty batches
    const deflateIterator1 = compression.compressBatches(inputChunks);
    const deflatedData = await concatenateArrayBuffersAsync(deflateIterator1);
    t.equals(deflatedData.byteLength, 17); // Header overhead

    // test chained iterators
    const deflateIterator = compression.compressBatches(inputChunks);

    const inflateIterator = compression.decompressBatches(deflateIterator);

    const inflatedChunks = [];
    for await (const chunk of inflateIterator) {
      inflatedChunks.push(chunk);
    }

    const inputData = concatenateArrayBuffers(...inputChunks);
    const inflatedData = concatenateArrayBuffers(...inflatedChunks);

    t.ok(compareArrayBuffers(inputData, inflatedData), 'deflate/inflate default options');
  }
  t.end();
});
