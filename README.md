# detabbify

[![NPM Version](https://img.shields.io/npm/v/detabbify.svg)](https://www.npmjs.com/package/detabbify)
[![test](https://github.com/arenanet/detabbify/actions/workflows/push-test.yml/badge.svg)](https://github.com/arenanet/detabbify/actions/workflows/push-test.yml)
[![license: MIT](https://img.shields.io/npm/l/detabbify.svg)](https://github.com/arenanet/detabbify/blob/master/package-lock.json)
[![downloads](https://img.shields.io/npm/dm/detabbify.svg)](https://www.npmjs.com/package/detabbify)


Replace tabs with spaces when running files through browserify.

## Options

### spaces

Configure how many spaces each `\t` character will be replaced with. Defaults to **4 spaces**.

## Usage

### CLI

```console
// Recommended to run globally
$ browserify ./file-with-spaces.js -g detabbify ./output.js

// Specify number of spaces
$ browserify ./file-with-spaces.js -g [ detabbify --spaces 4 ] ./output.js
```

### API
```js
var build = browserify("./file-with-spaces.js");

// Recommended to run globally
build.transform(detabbify, { global : true });

// Specify number of spaces
build.transform(detabbify, { global : true, spaces : 4 });
```
