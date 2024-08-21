const romanNumeralMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [1, "I"]
])

function convertRomanNumeral(num){
    let output = "";
    romanNumeralMap.forEach((numeral, key)=>
    {
        while(num >= key)
        {
            output+=numeral;
            num-=key;
        }
    });
    return output;
}

console.log(convertRomanNumeral(1999));

module.exports = convertRomanNumeral