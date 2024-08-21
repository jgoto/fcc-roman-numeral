const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    1: "I"
}

function convertRomanNumeral(num, key){
    let output = "";
    while(num >= key){
        output+=romanNumerals[key];
        num-=key;
    }
    return output;
}

module.exports = convertRomanNumeral