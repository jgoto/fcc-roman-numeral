const convertRomanNumeral = require("../script");

describe("Roman Numeral Conversion TestCases", ()=>{
    test("What is 1999", ()=>{
        // call function
        var a = convertRomanNumeral(1999)
        // assertions
        expect(a).toBe("MCMXCIX");
    });

    test("What is 16", ()=>{
        // call function
        var b = convertRomanNumeral(16)
        // assertions
        expect(b).toBe("XVI");
    });

    test("What is 789", ()=>{
        // call function
        var c = convertRomanNumeral(789)
        // assertions
        expect(c).toBe("DCCLXXXIX");
    });

    test("What is 1444", ()=>{
        // call function
        var d = convertRomanNumeral(1444)
        // assertions
        expect(d).toBe("MCDXLIV");
    });

    test("What is negative", ()=>{
        // call function
        var e = convertRomanNumeral(-555)
        // assertions
        expect(e).toBe("");
    });

    test("What is 649", ()=>{
        // call function
        var f = convertRomanNumeral(649)
        // assertions
        expect(f).toBe("DCXLIX");
    });

    test("What is 1023", ()=>{
        // call function
        var g = convertRomanNumeral(1023)
        // assertions
        expect(g).toBe("MXXIII");
    });

    test("What is 3999", ()=>{
        // call function
        var h = convertRomanNumeral(3999)
        // assertions
        expect(h).toBe("MMMCMXCIX");
    });
})