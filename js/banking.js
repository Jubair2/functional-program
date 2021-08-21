function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;

}
function updateTotalField(totalFieldId, amount) {
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + amount;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }

}


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);




    // console.log(depositAmount);
    //Get Current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;
    updateTotalField('deposit-total', depositAmount);


    //Update Balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    updateBalance(depositAmount, true);

    //clear input field 

    // depositInput.value = '';
});
//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    //Update Withdraw Total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    updateTotalField('withdraw-total', withdrawAmount);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    //update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    updateBalance(withdrawAmount, false);
    //clear input 

    // withdrawInput.value = '';

})