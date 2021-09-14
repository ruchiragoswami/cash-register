let billAmount = document.querySelector("#bill-amount");
let givenCash = document.querySelector("#given-cash"); 
let btnValid = document.querySelector("#btn-valid");
let btnCalc = document.querySelector("#btn-calc");
let btnReset = document.querySelector("#btn-reset");
let showMsg = document.querySelector("#show-message"); 
let lowerDiv = document.querySelector("#lower"); 
let table = document.querySelector("TABLE");
let displayReturn = document.querySelectorAll(".notes"); 

let ourNotes = [2000, 500, 100, 20, 10, 5, 1]

showMsg.style.display="none"; 
lowerDiv.style.display="none";
table.style.display="none";

function validate() {
   if (billAmount.value > 0) {
      lowerDiv.style.display="block";
      btnValid.style.display="none"; 
      showMsg.style.display="none";       
   } else {
      showMsg.innerText = "Please enter a valid amount!"; 
      showMsg.style.display="block";      
   }
}

btnValid.addEventListener("click", validate); 


function actualCount(someAmount) {
   for (let i=0; i < ourNotes.length; i++) {
      let notesNum=  Math.trunc(someAmount/ourNotes[i]) ; 
      someAmount = someAmount % ourNotes[i];
      displayReturn[i].innerText = notesNum;
   }
}


function calculate() {
   if ( parseInt(givenCash.value) >= parseInt(billAmount.value)) {
      let difference = givenCash.value - billAmount.value; 
      showMsg.innerText=  difference + " is to be returned";
      showMsg.style.display="block"; 
      table.style.display="block"; 
      actualCount(difference); 
   }  else if ( billAmount.value > givenCash.value) { 
      showMsg.innerText = "Given cash cannot be lesser than the bill amount!";
      showMsg.style.display="block"; 
   }  else {
      showMsg.innerText ="Another error!"; 
      showMsg.style.display="block"; 
   }
   
}





btnCalc.addEventListener("click", calculate); 

function reset() {
   billAmount.value =  "";
   givenCash.value = ""; 
   table.style.display="none"; 
   lowerDiv.style.display="none";   
   showMsg.style.display="none";
   btnValid.style.display="block"; 
  
}

btnReset.addEventListener("click", reset); 