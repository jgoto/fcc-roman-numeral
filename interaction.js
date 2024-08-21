const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

checkBtn.addEventListener("click", ()=>{
    if(number.value==="")
    {
        output.innerText = "Please enter a valid number";
    }
    else if(number.value < 0)
    {
        output.innerText = "Please enter a number greater than or equal to 1";
        number.value = "";
    }
    else if(number.value > 3999)
    {
        output.innerText = "Please enter a number less than or equal to 3999";
        number.value = "";
    }
    else
    {
        output.innerText = convertRomanNumeral(number.value);
    }
})

