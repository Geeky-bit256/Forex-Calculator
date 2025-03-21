//RESULTS TEXTS
const depositResults = document.getElementById("deposit-result");
const profitResult = document.getElementById("profit-result");
const realPercentageResult = document.getElementById("real-percentage-result");
const percentageResult = document.getElementById("percentage-result");


//SPANS
const depositTextWarning = document.getElementById("deposit-text-warning");
const profitTextWarning = document.getElementById("profit-text-warning");


function calculatePercent(){
// TEXT INPUTS
const depositInput = document.getElementById("deposit-input").value;
const profitInput = document.getElementById("profit-input").value;

//CAST THE INPUT VALUE
  const depositAmount = Number(depositInput);
  const profitAmount = Number(profitInput);
  
  if(depositInput.trim() !== "" && profitInput.trim() !== ""){
    const profitMade = profitAmount - depositAmount;
    const percent = (profitMade/depositAmount) * 100;
    const userPercent = (profitAmount/depositAmount) * 100;
    
    depositResults.textContent = `Deposit : R${depositAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
    profitResult.textContent = `Profit : R${profitAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
    realPercentageResult.textContent = ` Percentage : ${percent.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}%`;
    percentageResult.textContent = `Deposit + Profit | Percentage : ${userPercent.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}%`;
    
    //Reset span
    depositTextWarning.textContent = "";
    profitTextWarning.textContent = "";
    
  }else{
    if(depositInput.trim() === ""){
      depositTextWarning.textContent = "Please specify the initial deposit amount";
    }
    if(profitInput.trim() === ""){
      profitTextWarning.textContent = "Please specify the profit you have made";
      
    }
    
  }
  
  
}