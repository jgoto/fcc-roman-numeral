const convertRomanNumeral = require("../script");

describe("Roman Numeral Conversion TestCases", ()=>{
    test("What is 1999", ()=>{
        // call function
        var m = convertRomanNumeral(1999)
        // assertions
        expect(m).toBe("MCMXCIX");
    });
})