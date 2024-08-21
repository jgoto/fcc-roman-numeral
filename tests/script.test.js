const convertRomanNumeral = require("../script");

describe("Roman Numeral Conversion TestCases", ()=>{
    test("M is 1000", ()=>{
        // call function
        var m = convertRomanNumeral(3999, 1000)
        // assertions
        expect(m).toBe("MMM");
    });
})