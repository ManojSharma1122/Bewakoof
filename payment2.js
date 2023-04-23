
//userEmail();

paynow();
inputvalidate();
checkinputValidation();
cvvValidation();
calculateTotal();
var paymentDebitButton = document.getElementById("payment-debit-button");
var paymentWalletButton = document.getElementById("payment-wallet-button");
var paymentUpiButton = document.getElementById("payment-upi-button");
var paymentNetBankingButton = document.getElementById("payment-net-banking-button");
var paymentCodButton = document.getElementById("payment-cod-button");
var paymentBnplButton = document.getElementById("payment-bnpl-button");


// We have to change debit card button again on clicking second time;

/*paymentWalletButton.addEventListener("click", () => {
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
});*/

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

/*paymentUpiButton.addEventListener("click", () => {
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
});*/

/*paymentNetBankingButton.addEventListener("click", () => {
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
});*/
/*paymentCodButton.addEventListener("click",()=>{
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
})*/

/*paymentBnplButton.addEventListener("click",()=>{
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
})*/

 
document.getElementById("paynow-button").addEventListener("click", function () {
    window.location.href = "paymentsuccessful.html";
});

document.getElementById("verify-button").addEventListener("click", function () {
    window.location.href = "paymentsuccessful.html";
});



var FAmount = 0;
function calculateTotal() {
  var getarr = JSON.parse(localStorage.getItem("cart_item")) || [];
  var total = 0;
 

  for (var i = 0; i < getarr.length; i++) {
    for (var j = 0; j < getarr[i].length; j++) {
      total += getarr[i][j].price;
    }
  }

  FAmount = total; // Set FAmount to total inside the function

  console.log(total);
}




function paynow() 
{



  inputvalidate();
  document.getElementById("card-pay-now-button").addEventListener("click", function (e) {
    inputvalidate();
    checkinputValidation();
    cvvValidation();
   
    var cardNumberInput = document.getElementById("card-number");
    var cardExpiryInput = document.getElementById("card-expiry");
    var cardCVVInput = document.getElementById("card-password");
    var cardNameInput = document.getElementById("card-name");

    const cartItemStr = localStorage.getItem("cart_item");
    const cartItem = JSON.parse(cartItemStr);

    let totalPrice = 0;
    for (let i = 0; i < cartItem.length; i++) {
      totalPrice += cartItem[i].price;
    }

    console.log(totalPrice);



  
    if (cardNumberInput.value === '') {
      alert("Please enter the card number");
      //checkinputValidation();
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
      alert("We are processing your payment of ₹"+ totalPrice  +"");
      paymentDone();
      window.location.href = "paymentsuccessful.html";
    } else {
      alert("Wrong OTP, Try Again");
    }
  });





}

   


      
//validation code for  debit card 16 digit  code 

function inputvalidate() 
{

        const debitCardInput = document.getElementById('card-number');
        
        //const cvvInput = document.getElementById('card-password')

        /*debitExpInput.addEventListener('input', function(e) {

            // Remove all non-numeric characters from input
            const cleanedInput = e.target.value.replace(/\D/g, '');
          
            // Limit input to 4 digits
            const limitedInput = cleanedInput.slice(0, 4);
          
            // Format the input with a slash between the 2nd and 3rd digits
            const formattedInputep = limitedInput.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
          
            // Update the input value with the formatted input
            e.target.value = formattedInputep;

            cardExpiryInput = formattedInputep;
          });*/



       debitCardInput.addEventListener('input', function(e) 
      {

      //const cleanedInput1 = e.target.value.replace(/[^0-9]/g, '');
            const cleanedInput = e.target.value.replace(/\D/g, '');

            const limitedInput = cleanedInput.slice(0, 16);

        
            const formattedInput = limitedInput.replace(/(.{4})/g, '$1 ');

        
            const trimmedInput = formattedInput.trim();

            
            e.target.value = trimmedInput;

            cardNumberInput = trimmedInput;
      });

}

//validation code for Expire Date 

function cvvValidation() {
    const cardcv = document.getElementById('card-password');
    cardcv.addEventListener('input', function(e) 
      {


                
     
      //const cleanedInput1 = e.target.value.replace(/[^0-9]/g, '');
            const cleanedInput2 = e.target.value.replace(/\D/g, '');

            const limitedInput2 = cleanedInput2.slice(0, 3);

        
            const formattedInput2 = limitedInput2.replace(/(.{4})/g, '$1 ');

        
            const trimmedInput2 = formattedInput2.trim();

            
            e.target.value = trimmedInput2;

            cardCVVInput = trimmedInput2;
      });


}


function checkinputValidation() {
    // get the debit card input field
const debitCardInput = document.getElementById("card-number");

// add event listener to the input field
debitCardInput.addEventListener("change", function() {
  const debitCardNumber = debitCardInput.value;

  // check if debit card number input length is less than or equal to 16
  if (debitCardNumber.length <= 16 ) {
    // show pop-up
    alert("Debit card number should be 16 digits or less.");
    // reset the value to empty
    debitCardInput.value = "";
  }
});

}


var Arr = [];
var OrderDet = {
  orderid: 'ADIR73928',
  IteamName: 'Men shoe',
  price: FAmount,

};

// date code getting the date from the system

 // Call the function to calculate the total and set FAmount







function paymentDone() {

/*var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var dateString = year + "-" + month + "-" + day;
console.log(dateString);

  let cartData = [
    {
      price: 699,
      date: dateString,
    },
    {
        price: 699,
        date: dateString,
    },
    {
      price: 699,
      date: dateString,
    }
    
  ];

  let carArr = [];

  carArr.push(cartData);

  localStorage.setItem("cart_item",JSON.stringify(carArr));*/



      /*var getarr = JSON.parse(localStorage.getItem("cart_item")) || [];
    var total = 0;

    for (var i = 0; i < getarr.length; i++) {
      for (var j = 0; j < getarr[i].length; j++) {
        total += getarr[i][j].price;
      }
    }

    console.log(total);

  
    FAmount = total;
  //console.log(p);     */ 





// Create an array of objects
// Create an object with ItemName, billingDate, and totalPrice properties
let myObject = [
  {
    itemName: "Product 2",
    billingDate: "2023-04-21",
    totalPrice: 10.99,
  },
  {
    itemName: "Product 1",
    billingDate: "2023-04-22",
    totalPrice: 30.99,
  }
];



let myArray = [];

var total_item = [
  {

    //MAN OVERSIZED FIT SECTION STARTS--
    img:"https://images.bewakoof.com/t640/men-s-purple-beast-within-2-0-oversized-t-shirt-581488-1677228989-1.jpg",
    merchandise:"Bewakoof®",
    name: "Men's Purple Beast Within Graphic Printed Oversized0 T-shirt",
    rating: 4.2,
    price: 699,
    mrp: 1499,
    off:"53%",
    fit_design: ["OVERSIZED0 FIT"],
    color :["purple"],
    size: ['s','m','l','xl','2xl','3xl'],
    gender: "male",
    category: "T-shirt",
    bestseller: false,
    newarrive: false,
    buy3at999: true,
  },
  {
    img:"https://images.bewakoof.com/t640/men-s-blue-bones-graphic-printed-oversized-t-shirt-589386-1681726048-1.jpg",
    merchandise:"OFFICIAL DC COMICS MERCHANDISE",
    name: "Men's Blue Bones Graphic Printed Oversized T-shirt",
    rating: 4.2,
    price: 699,
    mrp: 1499,
    off:"53%",
    fit_design:["OVERSIZED FIT"] ,
    color :["blue"],
    size: ['s','m','l','xl','2xl','3xl'],
    gender: "male",
    category: "T-shirt",
    bestseller: false,
    newarrive: false,
    buy3at999: false,
  },
  {
    img:"https://images.bewakoof.com/t640/men-s-green-the-man-of-steel-graphic-printed-oversized-t-shirt-589395-1681725064-1.jpg",
    merchandise:"OFFICIAL DC COMICS MERCHANDISE",
    name: "Men's Green The Man Of Steel Graphic Printed Oversized T-shirt",
    rating: 4.2,
    price: 699,
    mrp: 1499,
    off:"53%",
    fit_design:["OVERSIZED FIT","DESIGN OF THE WEEK","100% COTTON"] ,
    color:["green"],
    size: ['s','m','l','xl','2xl','3xl'],
    gender: "male",
    category: "T-shirt",
    bestseller: false,
    newarrive: false,
    buy3at999: false,
  },
];


// Create an array and add the object to it

myArray.push(myObject);

// Store the array of objects in localStorage
localStorage.setItem("myData", JSON.stringify(myArray));

// Retrieve the data from localStorage and parse it back into an array of objects
let retrievedData = JSON.parse(localStorage.getItem("myData"));

// Log the retrieved data to the console
console.log(retrievedData);



}

function userEmail() {

  //let userArr = JSON.parse(localStorage.getItem("userData")) || [];
  //var uemail = document.getElementById("payment-navbar-email").userArr.userEmail;

  let userArr = JSON.parse(localStorage.getItem("userData")) || [];
  //let uemail = userArr[0].userEmail;

  if (userArr.length > 0) {
    let uemail = userArr[0].userEmail;
    document.getElementById("payment-navbar-email").innerHTML = uemail;
  }
  
  

  let userObj = {
   
    userEmail: "Sweta@gmail.com"
    
  }

  userArr.push(userObj);
  localStorage.setItem("userData", JSON.stringify(userArr));


  function cartData() {

  }

}

      
  