# RFC: loader auto detection in loaders.gl

- **Authors**: Ib Green
- **Date**: Jun 2019
- **Status**: Draft

## Summary

This RFC would enable loader name strings to specify a loader, without importing the loader object or even knowing if that loader has been registered, eliminating the need to import and reference loader objects in use cases like conditional reference to other loader.

### Allowing Loaders to be named

Using the loader name.

- 'draco' - would resolve to the "preferred" loader supporting Draco.
- 'las' - would resolve to the "preferred" loader supporting LAZ.

```js
parse(arrayBuffer, 'draco', ...); // throws if draco loader not available...
```

```js
import {isLoaderAvailable} from `@loaders.gl/core`;
```

## The JSON problem

`json` could cover a lot of formats. Should we define this to mean the JSON "table" loader specifically?

## Problems

## Proposals

### Proposal: selectLoader (Implemented)

Add a `selectLoader` API to give the application access to the loader selection algorithm.

### Proposal: Loader naming conventions

It is convenient if the names are valid JS strings, so that they can used as object keys without quoting. Lower case, removing spaces, hyphens and underscores:

- draco
- tileset3d
- tile3d

All loaders for the same format (WorkerLoader, StreamingLoader) would be referenced by the same name.

The user would need to decide the names for custom loaders.

## The loader specification problem

How does another part of the code reference a pre-registered loader without actually importing it?

Both extensions and MIME types are unreliable.

Auto detection via file format sniffing, if improved, would work in many cases, but not all formats have magic strings in the beginning, in particular different JSON formats.

In such cases, a parse call without a specified loader might look successful but actually returned something unexpected.

The loaders.gl name appears to be the remaining option.

### Use-Case: Conditional invocation of supporting loaders

Since loaders can be quite big, we don't always want a loader to always unconditionally `import` another loader that it does not always depend on.

For instance, we do not want the glTF loader to automatically import the 1.5MB Draco loader.

## Open Issues

- loader names are not based on any standard and are somewhat arbitrary.