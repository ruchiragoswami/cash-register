let billAmount = document.querySelector("#bill-amount");
let givenCash = document.querySelector("#given-cash"); 
let btnValid = document.querySelector("#btn-valid");
let btnCalc = document.querySelector("#btn-calc");
let btnReset = document.querySelector("#btn-reset");
let showMsg = document.querySelector("#show-message"); 
let lowerDiv = document.querySelector("#lower"); 
let table = document.querySelector("TABLE");

let ourNotes = [2000, 500, 100, 20, 10, 5, 1]

showMsg.style.display="none"; 
lowerDiv.style.display="none";
table.style.display="none";




function validate() {
   if (billAmount.value <=0) {
      showMsg
      .innerText = "Please enter a valid amount!"; 
      showMsg
      .style.display="block";
   } else {
      lowerDiv.style.display="block";
      btnValid.style.display="none"; 
      showMsg.style.display="none"; 
   }
}

function actualCount(someNum) {
   let num=  Math.trunc(someNum) ; 
   for (let i=0; i < ourNotes.length; i++) {
      ourNotes[i]/num 
   }
}


function calculate() {
   if (billAmount.value > givenCash.value) {
      showMsg
      .innerText = "Given cash cannot be lesser than the bill amount!";
      showMsg
      .style.display="block"; 
   } else {
      let difference = givenCash.value - billAmount.value; 
      showMsg.innerText=  difference + " is to be returned"
      showMsg.style.display="block"; 
      table.style.display="block"; 
      
   }
}




btnValid.addEventListener("click", validate); 
btnCalc.addEventListener("click", calculate); 

// function reset() {
//    showMsg.style.display="none";
//    lowerDiv.style.dispaly="none";
//    table.style.display="none"; 
//    btnValid.style.display="inline"; 

// }

// btnReset.addEventListener("click", reset); 