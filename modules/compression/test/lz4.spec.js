import test from 'tape-promise/tape';
import {LZ4Compression, CompressionWorker} from '@loaders.gl/compression';
import {processOnWorker, isBrowser} from '@loaders.gl/worker-utils';
import {getData, generateRandomArrayBuffer, compareArrayBuffers} from './utils/test-utils';
import lz4js from 'lz4js';

const SIZE = 100 * 1000;
const modules = {lz4js};

test('lz4#defaults', async (t) => {
  const binaryData = generateRandomArrayBuffer({size: SIZE});
  const repeatedData = generateRandomArrayBuffer({size: SIZE / 10, repetitions: 10});

  let deflatedData = await new LZ4Compression({modules}).compress(binaryData);
  let inflatedData = await new LZ4Compression({modules}).decompress(deflatedData);
  t.ok(compareArrayBuffers(binaryData, inflatedData), 'deflate/inflate default options');

  t.equal(repeatedData.byteLength, 100000, 'Repeated data length is correct');
  deflatedData = await new LZ4Compression({modules}).compress(repeatedData);
  t.equal(deflatedData.byteLength, 10422, 'Repeated data compresses well');
  inflatedData = await new LZ4Compression({modules}).decompress(deflatedData);
  t.equal(inflatedData.byteLength, 100000, 'Inflated data length is correct');
  t.ok(compareArrayBuffers(repeatedData, inflatedData), 'deflate/inflate default options');

  t.end();
});

// WORKER TESTS

test.skip('lz4#worker', async (t) => {
  if (!isBrowser) {
    t.end();
    return;
  }

  const {binaryData} = getData();

  t.equal(binaryData.byteLength, 100000, 'Length correct');

  const deflatedData = await processOnWorker(CompressionWorker, binaryData.slice(0), {
    compression: 'lz4',
    operation: 'deflate',
    _workerType: 'test'
  });

  t.equal(deflatedData.byteLength, 12331, 'Length correct');

  const inflatedData = await processOnWorker(CompressionWorker, deflatedData, {
    compression: 'lz4',
    operation: 'inflate',
    _workerType: 'test'
  });

  t.equal(inflatedData.byteLength, 100000, 'Length correct');

  t.ok(compareArrayBuffers(inflatedData, binaryData), 'deflate/inflate level 6');
  t.end();
});
