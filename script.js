let screen = document.querySelector(".number-on-screen");

let allbuttons = document.querySelectorAll(".button")

let buttons = document.querySelectorAll(".button").length;


let calculation = [];
 
let aggregcalc;

console.log(screen)

function calculate(button){
    const value = button.textContent

    if(value === "C"){
        calculation=[];
        screen.textContent= calculation
    }
    else if (value === "="){
        console.log(aggregcalc)
        screen.textContent= eval(aggregcalc)
    }
    else if ( value=== "←"){

        calculation.pop();
        aggregcalc = calculation.join('')
        
        screen.textContent= aggregcalc
    }
    else if (value === "*" || value === "+" || value === "-"  || value === "÷"){
        
        calculation.push(value)
        console.log(calculation)
        screen.textContent= aggregcalc.slice(-1)
    }
    else{
        calculation.push(value)
        aggregcalc = calculation.join('')
        console.log(calculation)
        screen.textContent= aggregcalc

    }


    
    

}

allbuttons.forEach(button => button.addEventListener(`click`, () => calculate(button) ))
