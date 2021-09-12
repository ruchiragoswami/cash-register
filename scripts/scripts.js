console.log("you have started"); 

let billAmount = document.getElementById("#billAmt");
let cashGiven = document.getElementById("#cash"); 
let btnCalc = document.getElementById("#calc");


function countChange(billAmount, cashGiven) {
   let difference =  cashGiven - billAmount;
//    return difference; 
    console.log(cashGiven);
    console.log(billAmount);
   console.log(difference); 
}

btnCalc.addEventListener("click", countChange )

// count(billAmount, cashGiven); 

console.log("finished");