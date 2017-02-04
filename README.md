detabbify [![NPM Version](https://img.shields.io/npm/v/detabbify.svg)](https://www.npmjs.com/package/detabbify) [![Build Status](https://img.shields.io/travis/arenanet/detabbify/master.svg)](https://travis-ci.org/arenanet/detabbify)
===========

[![Greenkeeper badge](https://badges.greenkeeper.io/arenanet/detabbify.svg)](https://greenkeeper.io/)
<p align="center">
    <a href="https://www.npmjs.com/package/detabbify" alt="NPM License">
        <img src="https://img.shields.io/npm/l/detabbify.svg" />
    </a>
    <a href="https://www.npmjs.com/package/detabbify" alt="NPM Downloads">
        <img src="https://img.shields.io/npm/dm/detabbify.svg" />
    </a>
    <a href="https://david-dm.org/arenanet/detabbify" alt="Dependency Status">
        <img src="https://img.shields.io/david/arenanet/detabbify.svg" />
    </a>
    <a href="https://david-dm.org/arenanet/detabbify#info=devDependencies" alt="devDependency Status">
        <img src="https://img.shields.io/david/dev/arenanet/detabbify.svg" />
    </a>
</p>

Replace tabs with spaces when running files through browserify.

## Options

### spaces

Configure how many spaces each `\t` character will be replaced with. Defaults to **4 spaces**.

## Usage

### CLI

```
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
