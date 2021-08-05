var currentBalanceAmount = document.getElementById("currentBalance").innerText;
currentBalanceAmount = parseFloat(currentBalanceAmount);
const loginBtn = document.getElementById('loginButton');
loginBtn.addEventListener('click',function changeDisplay(){
    const loginArea = document.getElementById("loginArea");
    loginArea.style.display = 'none';
    const accountDetails = document.getElementById("accountArea");
    accountDetails.style.display = "block";
});
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener('click', function depositMoney(){
    var depositAmount = document.getElementById('depositAmnt').value;
    depositAmount = parseFloat(depositAmount);
    var currentDepositAmount = document.getElementById('currentDeposit').innerText;
    currentDepositAmount = parseFloat(currentDepositAmount);
    currentDepositAmount = currentDepositAmount + depositAmount;
    currentBalanceAmount = currentBalanceAmount + depositAmount;
    document.getElementById("currentBalance").innerText = currentBalanceAmount;
    document.getElementById('currentDeposit').innerText = currentDepositAmount;
    document.getElementById('depositAmnt').value = "";
});
const withdrawButton = document.getElementById("withdrawBtn");
withdrawButton.addEventListener('click', function withdrawMoney(){
    withdrawAmount = document.getElementById("withdrawAmnt").value;
    withdrawAmount = parseFloat(withdrawAmount);
    var currentWithdrawAmount = document.getElementById("currentWithdraw").innerText;
    currentWithdrawAmount = parseFloat(currentWithdrawAmount);
    currentWithdrawAmount = currentWithdrawAmount+withdrawAmount;
    document.getElementById("currentWithdraw").innerText = currentWithdrawAmount;
    document.getElementById("withdrawAmnt").value = "";
    currentBalanceAmount=currentBalanceAmount-withdrawAmount;
    document.getElementById("currentBalance").innerText = currentBalanceAmount;
});