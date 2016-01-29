"use strict";

var test       = require("tape"),
    concat     = require("concat-stream"),
    from       = require("from2-string"),
    browserify = require("browserify"),
    
    detabbify = require("../");

test("exports", function(t) {
    t.plan(1);
    
    t.equal(typeof detabbify, "function", "Should be a function");
});

test("defaults", function(t) {
    var str;
    
    t.plan(1);
    
    str = detabbify("./fake.js");
    
    str.pipe(concat(function(out) {
        t.equal(out.toString(), "    ", "Should replace \t with 4 spaces");
    }));
    
    str.write("\t");
    str.end();
});

test("options", function(t) {
    var str;
    
    t.plan(1);
    
    str = detabbify("./fake.js", { spaces : 2 });
    
    str.pipe(concat(function(out) {
        t.equal(out.toString(), "  ", "Should replace \t with 2 spaces");
    }));
    
    str.write("\t");
    str.end();
});

test("browserify", function(t) {
    var build = browserify({
            entries : from("\t'hello';")
        });
    
    t.plan(1);
    
    build.transform(detabbify);
    
    build.bundle(function(err, out) {
        t.ok(out.toString().indexOf("    'hello';") > -1, "Replaced file contents correctly");
    });
});

test("browserify + options", function(t) {
    var build = browserify({
            entries : from("\t'hello';")
        });
    
    t.plan(1);
    
    build.transform(detabbify, { spaces : 2 });
    
    build.bundle(function(err, out) {
        t.ok(out.toString().indexOf("  'hello';") > -1, "Replaced file contents correctly");
    });
});
