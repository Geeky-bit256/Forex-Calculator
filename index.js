//RESULTS TEXTS
const depositResults = document.getElementById("deposit-result");
const percentageResult = document.getElementById("percentage-result");
const realTargetResult = document.getElementById("realTarget-result");
const targetResult = document.getElementById("target-result");
//RESULTS DIV
const resultsDiv = document.getElementById("results-div");



//SPANS
const depositTextWarning = document.getElementById("deposit-text-warning");
const percentageTextWarning = document.getElementById("percentage-text-warning");

let selectedCurrency = "zar"
//RADIO BUTTONS
const radioButtons = document.querySelectorAll('input[name="currency"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change',() => {selectedCurrency = radioButton.value;})
} );

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
    
    resultsDiv.style.display = 'block';
    
    //Switch between the selected currency
    switch(selectedCurrency){
      case 'usc' : 
        depositAmountInZar = depositAmount/100*19;
        realTargetAmountInZar = realTarget/100*19;
        targetAmountInZar = target/100*19;
        depositResults.textContent = `Deposit : ${depositAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})} USC [R${depositAmountInZar.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}]`;
        
    percentageResult.textContent = `Percentage : ${percentageAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}%`;
    
    realTargetResult.textContent = `Target : ${realTarget.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})} USC  [R${realTargetAmountInZar.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}]`;
    
    targetResult.textContent = `Deposit + Target : ${target.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})} USC [R${targetAmountInZar.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}]`;
        break;
        
      case 'zar' : 
        depositResults.textContent = `Deposit : R${depositAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
        
    percentageResult.textContent = `Percentage : ${percentageAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}%`;
    
    realTargetResult.textContent = `Target : R${realTarget.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
    
    targetResult.textContent = `Deposit + Target : R${target.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}`;
        break;
        
        
      case 'usd' : 
        depositResults.textContent = `Deposit : ${depositAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})} USD`;
    percentageResult.textContent = `Percentage : ${percentageAmount.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})}%`;
    realTargetResult.textContent = `Target : ${realTarget.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})} USD`;
    targetResult.textContent = `Deposit + Target : ${target.toLocaleString("en-Za",{minimumFractionDigits :2 ,maximumFractionDigits : 2})} USD`;
        break;
    }
    
    
    
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