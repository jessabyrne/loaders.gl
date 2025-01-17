import type {BinaryFeatures} from '@loaders.gl/schema';

/**
 * Apply transformation to every coordinate of binary features
 *
 * @param  binaryFeatures binary features
 * @param  fn       Function to call on each coordinate
 * @return          Transformed binary features
 */
export function transformBinaryCoords(
  binaryFeatures: BinaryFeatures,
  fn: (coord: number[]) => number[]
): BinaryFeatures {
  // Expect binaryFeatures to have points, lines, and polygons keys
  for (const binaryFeature of Object.values(binaryFeatures)) {
    const {positions} = binaryFeature;
    for (let i = 0; i < positions.value.length; i += positions.size) {
      // @ts-ignore inclusion of bigint causes problems
      const coord = Array.from(positions.value.subarray(i, i + positions.size));
      const transformedCoord = fn(coord);
      // @ts-ignore typescript typing for .set seems to require bigint?
      positions.value.set(transformedCoord, i);
    }
  }
  return binaryFeatures;
}

/**
 * Apply transformation to every coordinate of GeoJSON features
 *
 * @param  features Array of GeoJSON features
 * @param  fn       Function to call on each coordinate
 * @return          Transformed GeoJSON features
 */
export function transformGeoJsonCoords(
  features: object[],
  fn: (coord: number[]) => number[]
): object[] {
  for (const feature of features) {
    // @ts-ignore
    feature.geometry.coordinates = coordMap(feature.geometry.coordinates, fn);
  }
  return features;
}

function coordMap(array, fn) {
  if (isCoord(array)) {
    return fn(array);
  }

  return array.map((item) => {
    return coordMap(item, fn);
  });
}

function isCoord(array) {
  return Number.isFinite(array[0]) && Number.isFinite(array[1]);
}
