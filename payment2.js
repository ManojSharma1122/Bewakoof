
var paymentDebitButton = document.getElementById("payment-debit-button");
var paymentWalletButton = document.getElementById("payment-wallet-button");
var paymentUpiButton = document.getElementById("payment-upi-button");
var paymentNetBankingButton = document.getElementById("payment-net-banking-button");
var paymentCodButton = document.getElementById("payment-cod-button");
var paymentBnplButton = document.getElementById("payment-bnpl-button");
// We have to change debit card button again on clicking second time;

paymentWalletButton.addEventListener("click", () => {
    // left div changed
    paymentWalletButton.style.backgroundColor = "white";
    paymentWalletButton.style.borderLeft = "5px solid #42a2a2";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    paymentCodButton.style.backgroundColor ="whitesmoke";
    paymentCodButton.style.border = "none";
    paymentBnplButton.style.backgroundColor ="whitesmoke";
    paymentBnplButton.style.border = "none";
    // right div changed
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-wallet").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    document.getElementById("payment-bnpl").style.display = "none";
});

paymentDebitButton.addEventListener("click", () => {
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButtonButton.style.backgroundColor = "white";
    paymentDebitButtonButton.style.borderLeft = "5px solid #42a2a2";
    paymentCodButton.style.backgroundColor ="whitesmoke";
    paymentCodButton.style.border = "none";
    paymentBnplButton.style.backgroundColor ="whitesmoke";
    paymentBnplButton.style.border = "none";
    document.getElementById("payment-debit").style.display = "block";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    document.getElementById("payment-bnpl").style.display = "none";
});

paymentUpiButton.addEventListener("click", () => {
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "white";
    paymentUpiButton.style.borderLeft = "5px solid #42a2a2";
    paymentCodButton.style.backgroundColor ="whitesmoke";
    paymentCodButton.style.border = "none";
    paymentBnplButton.style.backgroundColor ="whitesmoke";
    paymentBnplButton.style.border = "none";
    document.getElementById("payment-upi").style.display = "block";
    // document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    document.getElementById("payment-bnpl").style.display = "none";
});

paymentNetBankingButton.addEventListener("click", () => {
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "white";
    paymentNetBankingButton.style.borderLeft = "5px solid #42a2a2";
    paymentCodButton.style.backgroundColor ="whitesmoke";
    paymentCodButton.style.border = "none";
    paymentBnplButton.style.backgroundColor ="whitesmoke";
    paymentBnplButton.style.border = "none";
    document.getElementById("payment-net-banking").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    document.getElementById("payment-bnpl").style.display = "none";
});
paymentCodButton.addEventListener("click",()=>{
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.borderLeft = "none";
    paymentCodButton.style.backgroundColor ="white";
    paymentCodButton.style.borderLeft = "5px solid #42a2a2";
    paymentBnplButton.style.backgroundColor ="whitesmoke";
    paymentBnplButton.style.border = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-cod").style.display = "block";
    document.getElementById("payment-bnpl").style.display = "none";
})

paymentBnplButton.addEventListener("click",()=>{
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.borderLeft = "none";
    paymentCodButton.style.backgroundColor ="whitesmoke";
    paymentCodButton.style.borderLeft = "none";
    paymentBnplButton.style.backgroundColor ="white";
    paymentBnplButton.style.borderLeft= "5px solid #42a2a2";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    document.getElementById("payment-bnpl").style.display = "block";
})

document.getElementById("card-pay-now-button").addEventListener("click", function () {

    var person = prompt("Please enter your OTP", "");
    if (person == "1234") {
        alert("We are processing your payment !");
        window.location.href = "paymentsuccess.html";
    }
    else {
        alert("Wrong OTP, Try Again");
    }
    
});
document.getElementById("paynow-button").addEventListener("click", function () {
    window.location.href = "paymentsuccess.html";
});

document.getElementById("verify-button").addEventListener("click", function () {
    window.location.href = "paymentsuccess.html";
});


