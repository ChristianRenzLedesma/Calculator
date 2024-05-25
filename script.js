const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

// function calculate(){
//     eval(display.value);
//     display.value = "I Love You";
// }

function calculate(){
    display.value = eval(display.value);
}