const buttons = document.querySelectorAll(".btn");
const screenDisplay =document.querySelector(".output");

let calculation = [];
let accumulativeCalculation;


function calculate(button) {
const value =  button.textContent ;

   if(value == "AC") {
        calculation = [];
        screenDisplay.textContent = '';
   } else if (value == "="){
      screenDisplay.textContent = eval(accumulativeCalculation)     
   } else if (value =="DEL"){
        calculation.pop(value);
        accumulativeCalculation = calculation.join('');
    screenDisplay.textContent =  accumulativeCalculation;
   } 
   else {
    calculation.push(value);
    accumulativeCalculation = calculation.join('');
    screenDisplay.textContent =  accumulativeCalculation;

   }

   

 
}



buttons.forEach(button => button.addEventListener("click", ()=> calculate(button)));


