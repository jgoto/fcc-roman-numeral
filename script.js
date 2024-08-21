const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

checkBtn.addEventListener("click", ()=>{
    if(number.value==="")
    {
        alert("Please enter a valid number")
    }
    else if(number.value < 0)
    {
        alert("Please enter a number greater than or equal to 1");
        number.value = "";
    }
    else if(number.value > 3999)
    {
        alert("Please enter a number less than or equal to 3999")
        number.value = "";
    }
    else
    {
        output.innerText = convertRomanNumeral(number.value);
    }
})



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
    [4, "IV"],
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

console.log(convertRomanNumeral(45));

module.exports = convertRomanNumeral
