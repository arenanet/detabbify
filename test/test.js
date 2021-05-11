"use strict";

const test       = require("tape");
const concat     = require("concat-stream");
const from       = require("from2-string");
const browserify = require("browserify");

const detabbify = require("../");

test("exports", function(t) {
    t.plan(1);

    t.equal(typeof detabbify, "function", "Should be a function");
});

test("defaults", function(t) {
    let str;

    t.plan(1);

    str = detabbify("./fake.js");

    str.pipe(concat(function(out) {
        t.equal(out.toString(), "    ", "Should replace \t with 4 spaces");
    }));

    str.write("\t");
    str.end();
});

test("options", function(t) {
    let str;

    t.plan(1);

    str = detabbify("./fake.js", { spaces : 2 });

    str.pipe(concat(function(out) {
        t.equal(out.toString(), "  ", "Should replace \t with 2 spaces");
    }));

    str.write("\t");
    str.end();
});

test("browserify", function(t) {
    let build = browserify({
            entries : from("\t'hello';")
        });

    t.plan(1);

    build.transform(detabbify);

    build.bundle(function(err, out) {
        t.ok(out.toString().indexOf("    'hello';") > -1, "Replaced file contents correctly");
    });
});

test("browserify + options", function(t) {
    let build = browserify({
            entries : from("\t'hello';")
        });

    t.plan(1);

    build.transform(detabbify, { spaces : 2 });

    build.bundle(function(err, out) {
        t.ok(out.toString().indexOf("  'hello';") > -1, "Replaced file contents correctly");
    });
});
