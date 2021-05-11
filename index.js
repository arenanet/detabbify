"use strict";

const through = require("through2");

const tab = /\t/g;

module.exports = function(file, options) {
    const opt  = options || false;
    const size = opt.spaces || 4;
    const str  = new Array(size + 1).join(" ");

    return through(function write(chunk, enc, next) {
        next(null, chunk.toString().replace(tab, str));
    });
};
