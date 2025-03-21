//RESULTS TEXTS
const depositResults = document.getElementById("deposit-result");
const percentageResult = document.getElementById("percentage-result");
const realTargetResult = document.getElementById("realTarget-result");
const targetResult = document.getElementById("target-result");


//SPANS
const depositTextWarning = document.getElementById("deposit-text-warning");
const percentageTextWarning = document.getElementById("percentage-text-warning");


function calculateTarget(){
// TEXT INPUTS
const depositInput = document.getElementById("deposit-input").value;
const percentageInput = document.getElementById("percentage-input").value;

//CAST THE INPUT VALUE
  const depositAmount = Number(depositInput);
  const percentageAmount = Number(percentageInput);
  
  if(depositInput.trim() !== "" && percentageInput.trim() !== ""){
    const target = depositAmount * (percentageAmount /100);
    const realTarget = depositAmount * (percentageAmount /100) - depositAmount;
    
    depositResults.textContent = `Deposit : R${depositAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
    percentageResult.textContent = `Percentage : ${percentageAmount}%`;
    realTargetResult.textContent = `Target : R${realTarget.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
    targetResult.textContent = `Deposit + Target : R${target.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
    
    
    //Reset span
    depositTextWarning.textContent = "";
    percentageTextWarning.textContent = "";
    
  }else{
    if(depositInput.trim() === ""){
      depositTextWarning.textContent = "Please specify the initial deposit amount";
    }
    if(percentageInput.trim() === ""){
      percentageTextWarning.textContent = "Please specify the percentage amount";
      
    }
    
  }
  
  
}