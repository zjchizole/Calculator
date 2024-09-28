
// Display
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

// Clear Function
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "AMPOGI KO";
    }
}
