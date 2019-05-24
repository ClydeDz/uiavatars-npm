const uiavatars = require('./../dist/index');
const assert = require('assert');

describe('JSON snippets test', function () {
    console.log("[test]", this.title);

    it('check if JSON snippet file is named after the language identifier', function () {
        console.log("  ", "[test]", this.test.title);
        var a = uiavatars.getPlural(true);
        assert.equal(a, "s", "a");
    });

});