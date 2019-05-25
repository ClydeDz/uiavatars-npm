const uiavatars = require('../lib/uiavatars');
const assert = require('assert'); 

describe('JSON snippets test', function () {
    console.log("[test]", this.title);

    it('check if JSON snippet file is named after the language identifier x', function () {
        console.log("  ", "[test]", this.test.title);
        var a = uiavatars.generateAvatar();
        assert.equal(a, "https://ui-avatars.com/api/?", "a");
    });

    
    it('check if JSON snippet file is named after the language identifier x', function () {
        console.log("  ", "[test]", this.test.title);
        var a = uiavatars.generateAvatar({});
        assert.equal(a, "https://ui-avatars.com/api/?", "a");
    });

    it('check if JSON snippet file is named after the language identifier x', function () {
        console.log("  ", "[test]", this.test.title);
        var a = uiavatars.generateAvatar({outOfContext: true});
        assert.equal(a, "https://ui-avatars.com/api/?", "a");
    });

    it('check if JSON snippet file is named after the language identifier', function () {
        console.log("  ", "[test]", this.test.title);
        var a = uiavatars.generateAvatar({name:"Bruce Banner"});
        assert.equal(a, "https://ui-avatars.com/api/?&name=Bruce Banner", "a");
    });

    it('check if JSON snippet file is named after the language identifier 0.3', function () {
        console.log("  ", "[test]", this.test.title);
        var a = uiavatars.generateAvatar({fontsize: 0.3}); 
        assert.equal(a, "https://ui-avatars.com/api/?&font-size=0.3", "a");
    });

});