function generateOrderId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 string
    const random = Math.random().toString(36).substr(2, 5); // Generate 5 random characters
    return timestamp + random; // Concatenate timestamp and random characters to create unique ID
  }
  const orderId = generateOrderId();
//console.log(orderId); // Example output: "1kxv1b6e"




/*var myData1 = JSON.parse(localStorage.getItem("myData")) || [];

console.log("myData1.billingDate:", myData1.billingDate);
console.log("myData1.totalPrice:", myData1.totalPrice);

var od = document.querySelector('.order-id').textContent = orderId;
var bdate = document.querySelector('.bill').textContent = myData1.billingDate;
var tprice = document.querySelector('.total-price').textContent = myData1.totalPrice;

console.log(od, bdate, tprice);*/

var myData1 = JSON.parse(localStorage.getItem("myData")) || [];
var orderData = myData1[0][0]; // access the object inside the inner array

console.log("orderData.billingDate:", orderData.billingDate);
console.log("orderData.totalPrice:", orderData.totalPrice);

var od = document.querySelector('.order-id').textContent = orderId;
var bdate = document.querySelector('.bill').textContent = orderData.billingDate;
var tprice = document.querySelector('.total-price').textContent = orderData.totalPrice;

console.log(od, bdate, tprice);


//pdf save billl code

function downloadPdf() {
    const doc = new jsPDF();
    const orderId = document.querySelector('.order-id').textContent;
    const billDate = document.querySelector('.bill').textContent;
    const totalPrice = document.querySelector('.total-price').textContent;
    const text = `Order ID: ${orderId}\nBilling Date: ${billDate}\nTotal Amount: ${totalPrice}`;
  
    doc.text(text, 10, 10);
    doc.save(`${orderId}.pdf`);
  }
  
  var btn = document.getElementById('btn');
  btn.addEventListener('click', downloadPdf);



















 