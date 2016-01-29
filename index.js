"use strict";
var through = require("through2"),
    tab     = /\t/g;

module.exports = function(file, options) {
    var opt  = options || false,
        size = opt.spaces || 4,
        str  = new Array(size + 1).join(" ");
    
    return through(function write(chunk, enc, next) {
        next(null, chunk.toString().replace(tab, str));
    });
};
