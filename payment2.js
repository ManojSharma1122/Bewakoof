
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

 
document.getElementById("paynow-button").addEventListener("click", function () {
    window.location.href = "paymentsuccessful.html";
});

document.getElementById("verify-button").addEventListener("click", function () {
    window.location.href = "paymentsuccessful.html";
});



  document.getElementById("card-pay-now-button").addEventListener("click", function (e) {
    inputvalidate();
    var cardNumberInput = document.getElementById("card-number");
    var cardExpiryInput = document.getElementById("card-expiry");
    var cardCVVInput = document.getElementById("card-password");
    var cardNameInput = document.getElementById("card-name");



  
    if (cardNumberInput.value === '') {
      alert("Please enter the card number");
      return;
    }
  
    if (cardExpiryInput.value === '') {
      alert("Please enter the card expiry date");
      return;
    }
  
    if (cardCVVInput.value === '') {
      alert("Please enter the card CVV number");
      return;
    }
  
    if (cardNameInput.value === '') {
      alert("Please enter the name on the card");
      return;
    }
  
    var person = prompt("Please enter your OTP", "");
  
    if (person == "1234") {
      alert("We are processing your payment !");
      window.location.href = "paymentsuccessful.html";
    } else {
      alert("Wrong OTP, Try Again");
    }
  });


      
//validation code for  debit card 16 digit  code 

function inputvalidate() 
{

        const debitCardInput = document.getElementById('card-number');
        const debitExpInput = document.getElementById('card-expiry');
        const cvvInput = document.getElementById('card-password');



        cvvInput.addEventListener('input', function(e) {

            // Remove all non-numeric characters from input
            const cleanedInput = e.target.value.replace(/\D/g, '');
          
            // Limit input to 3 digits
            const limitedInput = cleanedInput.slice(0, 3);
          
            // Update the input value with the limited input
            e.target.value = limitedInput;

            cardCVVInput = limitedInput;
          });




        debitExpInput.addEventListener('input', function(e) {

            // Remove all non-numeric characters from input
            const cleanedInput = e.target.value.replace(/\D/g, '');
          
            // Limit input to 4 digits
            const limitedInput = cleanedInput.slice(0, 4);
          
            // Format the input with a slash between the 2nd and 3rd digits
            const formattedInputep = limitedInput.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
          
            // Update the input value with the formatted input
            e.target.value = formattedInputep;

            cardExpiryInput = formattedInputep;
          });













     
      debitCardInput.addEventListener('input', function(e) 
      {

     
      //const cleanedInput1 = e.target.value.replace(/[^0-9]/g, '');
            const cleanedInput = e.target.value.replace(/\D/g, '');

            const limitedInput = cleanedInput.slice(0, 16);

        
            const formattedInput = limitedInput.replace(/(.{4})/g, '$1 ');

        
            const trimmedInput = formattedInput.trim();

            
            e.target.value = trimmedInput;

            cardNameInput = trimmedInput;
      });

}

//validation code for Expire Date 

function expireValidation() {

}
      
  