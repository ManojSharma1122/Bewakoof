function generateOrderId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 string
  const random = Math.random().toString(36).substr(2, 5); // Generate 5 random characters
  return timestamp + random; // Concatenate timestamp and random characters to create unique ID
}

//calculateTotal();
const orderId = generateOrderId();
//console.log(orderId); // Example output: "1kxv1b6e"




/*var myData1 = JSON.parse(localStorage.getItem("myData")) || [];

console.log("myData1.billingDate:", myData1.billingDate);
console.log("myData1.totalPrice:", myData1.totalPrice);

var od = document.querySelector('.order-id').textContent = orderId;
var bdate = document.querySelector('.bill').textContent = myData1.billingDate;
var tprice = document.querySelector('.total-price').textContent = myData1.totalPrice;

console.log(od, bdate, tprice);*/




/*var FAmount = 0;
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
}*/




//var myData1 = JSON.parse(localStorage.getItem("myData")) || [];
//var orderData = myData1[0][0]; // access the object inside the inner array
//var getarr2 = JSON.parse(localStorage.getItem("cart_item")) || [];

const cartItemStr = localStorage.getItem("cart_item");
const cartItem = JSON.parse(cartItemStr);

let totalPrice = 0;
for (let i = 0; i < cartItem.length; i++) {
totalPrice += cartItem[i].price;
}

console.log(totalPrice);




var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var dateString = year + "-" + month + "-" + day;
console.log(dateString);

//var oData = getarr2[0];
//var orderId = "ORD-1234"; // Replace with your own order ID

// Set the order ID, billing date, and total price in the HTML using querySelector
document.querySelector('.order-id').textContent = orderId;
document.querySelector('.bill').textContent = dateString;
//document.querySelector('.total-price').textContent = oData[0].price;

// Calculate the total and set FAmount
/*var total = 0;
for (var i = 0; i < getarr2.length; i++) {
for (var j = 0; j < getarr2[i].length; j++) {
  total += getarr2[i][j].price;
}
}
var FAmount = total;*/
document.querySelector('.total-price').textContent = "₹"+totalPrice;


/*console.log("orderData.Item:", orderData.itemName);
console.log("orderData.billingDate:", orderData.billingDate);
console.log("orderData.totalPrice:", orderData.totalPrice);*/

/*var od = document.querySelector('.order-id').textContent = orderId;
var it = document.querySelector('.item').textContent = orderData.itemName;
var bdate = document.querySelector('.bill').textContent = orderData.billingDate;
var tprice = document.querySelector('.total-price').textContent = orderData.totalPrice;*/





    

//console.log(od,it, bdate, tprice);

/*for (let i = 0; i < myData1.length; i++) {

// Set the element to a HTML element
  var data1 = myData1[i].itemName;
  console.log(data1
}*/
//pdf save billl code





















