const uiavatars = require("../lib/uiavatars");
const assert = require("assert"); 

describe("generateAvatar()", function () {
    console.log("[test suite]", this.title);

    it("no input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar(); 
        assert.equal(actual, "https://ui-avatars.com/api/?");
    });
    
    it("empty object supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({});
        assert.equal(actual, "https://ui-avatars.com/api/?");
    });

    it("invalid setting supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({outOfContext: true});
        assert.equal(actual, "https://ui-avatars.com/api/?");
    });

    it("only name supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({name:"Bruce Banner"});
        assert.equal(actual, "https://ui-avatars.com/api/?name=Bruce Banner");
    });

    it("only font size supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({fontsize: 0.3}); 
        assert.equal(actual, "https://ui-avatars.com/api/?font-size=0.3");
    });

    it("only bold supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({bold: true}); 
        assert.equal(actual, "https://ui-avatars.com/api/?bold=true");
    });

    it("only background supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({background: ""}); 
        assert.equal(actual, "https://ui-avatars.com/api/?");
    }); 

    it("bold supplied as false", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({bold: false}); 
        assert.equal(actual, "https://ui-avatars.com/api/?");
    });

    it("3 settings supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({uppercase: true, name: "Tony Stark", background: "990000"}); 
        assert.equal(actual, "https://ui-avatars.com/api/?name=Tony Stark&background=990000&uppercase=true");
    });

    it("all settings supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = uiavatars.generateAvatar({
            uppercase: true, 
            name: "Tony Stark", 
            background: "990000",
            color: "000000",
            fontsize: 0.5,
            bold: true,
            length: 2,
            rounded: true,
            size: 250
        }); 
        var expected = "https://ui-avatars.com/api/?name=Tony Stark&background=990000&color=000000&size=250&font-size=0.5&length=2&rounded=true&bold=true&uppercase=true";
        assert.equal(actual, expected);
    });
    
});