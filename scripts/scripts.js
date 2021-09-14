let billAmount = document.querySelector("#bill-amount");
let givenCash = document.querySelector("#given-cash"); 
let btnValid = document.querySelector("#btn-valid");
let btnCalc = document.querySelector("#btn-calc");
let btnReset = document.querySelector("#btn-reset");
let showError = document.querySelector("#show-error"); 
let lowerDiv = document.querySelector("#lower"); 
let table = document.querySelector("TABLE");



showError.style.display="none"; 
lowerDiv.style.display="none";
table.style.display="none";




function validate() {
   if (billAmount.value <=0) {
      showError.innerText = "Please enter a valid amount!"; 
      showError.style.display="block";
   } else {
      lowerDiv.style.display="block";
      btnValid.style.display="none"; 
      showError.style.display="none"; 
   }
}


function calculate() {
   if (billAmount.value > givenCash.value) {
      showError.innerText = "Given cash cannot be lesser than the bill amount!";
      showError.style.display="block"; 
   } else {
      showError.style.display="none"; 
      table.style.display="block"; 
   }
}




btnValid.addEventListener("click", validate); 
btnCalc.addEventListener("click", calculate); 

// function reset() {
//    showError.style.display="none";
//    lowerDiv.style.dispaly="none";
//    table.style.display="none"; 
//    btnValid.style.display="inline"; 

// }

// btnReset.addEventListener("click", reset); 