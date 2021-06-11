import test from 'tape-promise/tape';
import {GZipCompression, CompressionWorker} from '@loaders.gl/compression';
import {processOnWorker} from '@loaders.gl/worker-utils';
import {isBrowser} from '@loaders.gl/loader-utils';
import {getData, compareArrayBuffers} from './utils/test-utils';

test('gzip#0', async (t) => {
  const {binaryData} = getData();
  const deflatedData = await new GZipCompression({gzip: {level: 0}}).compress(binaryData);
  const inflatedData = await new GZipCompression().decompress(deflatedData);
  t.ok(compareArrayBuffers(binaryData, inflatedData), 'deflate/inflate level 0');
  t.end();
});

test('gzip#1', async (t) => {
  const {binaryData} = getData();
  const deflatedData = await new GZipCompression({gzip: {level: 1}}).compress(binaryData);
  const inflatedData = await new GZipCompression().decompress(deflatedData);
  t.ok(compareArrayBuffers(binaryData, inflatedData), 'deflate/inflate level 1');
  t.end();
});

test('gzip#4', async (t) => {
  const {binaryData} = getData();
  const deflatedData = await new GZipCompression({gzip: {level: 4}}).compress(binaryData);
  const inflatedData = await new GZipCompression().decompress(deflatedData);
  t.ok(compareArrayBuffers(binaryData, inflatedData), 'deflate/inflate level 4');
  t.end();
});

test('gzip#6', async (t) => {
  const {binaryData} = getData();
  const deflatedData = await new GZipCompression({gzip: {level: 6}}).compress(binaryData);
  const inflatedData = await new GZipCompression().decompress(deflatedData);
  t.ok(compareArrayBuffers(binaryData, inflatedData), 'deflate/inflate level 6');
  t.end();
});

// WORKER TESTS

test.skip('gzip#worker', async (t) => {
  if (!isBrowser) {
    t.end();
    return;
  }

  const {binaryData} = getData();

  t.equal(binaryData.byteLength, 100000, 'Length correct');

  const deflatedData = await processOnWorker(CompressionWorker, binaryData.slice(0), {
    compression: 'gzip',
    operation: 'deflate',
    _workerType: 'test',
    gzip: {
      level: 6
    }
  });

  t.equal(deflatedData.byteLength, 12825, 'Length correct');

  const inflatedData = await processOnWorker(CompressionWorker, deflatedData, {
    compression: 'gzip',
    operation: 'inflate',
    _workerType: 'test',
    gzip: {
      level: 6
    }
  });

  t.equal(inflatedData.byteLength, 100000, 'Length correct');

  t.ok(compareArrayBuffers(inflatedData, binaryData), 'deflate/inflate level 6');
  t.end();
});
