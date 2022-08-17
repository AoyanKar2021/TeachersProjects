let wresult=0;
let dresult=0;

// Deposite Value Input
document.getElementById("deposit_btn").addEventListener("click",function(){
    
    let dValue= document.getElementById("Deposite_value").value;
    let currentDeposit=document.getElementById("depositePrint");
    dresult += parseInt(dValue+currentDeposit);
    currentDeposit.innerHTML=dresult;
    let currentBalance=document.getElementById("balancePrint");
    currentBalance.innerHTML=(parseInt(currentBalance.innerText))+dresult;
   console.log(currentBalance);
    
})
// Withdraw Value Input
document.getElementById("Withdraw_btn").addEventListener("click",function(){
    let wValue=document.getElementById("Withdraw_value").value; 
    let currentWithdraw=document.getElementById("withdrawPrint");
     wresult += parseInt(wValue+currentWithdraw);
    currentWithdraw.innerHTML=wresult;
    let currentBalance=document.getElementById("balancePrint");
     currentBalance.innerHTML=(parseInt(currentBalance.innerText))-wresult;
    console.log(currentBalance);
})