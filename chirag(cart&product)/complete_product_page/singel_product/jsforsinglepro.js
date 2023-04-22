
let product = JSON.parse(localStorage.getItem("single_prod"))||[];

var link = product[0].img;
var image = document.createElement("img")
image.setAttribute("src",link)

var image_div = document.querySelector(".img")
image_div.append(image)

var brnd_name = product[0].merchandise;
document.querySelector("h2").append(brnd_name)

var names = product[0].name
document.querySelector("p").append(names)

var price = product[0].price
document.querySelector("h4").append(price)

var mrp = product[0].mrp
var mrps = document.querySelector("h4").append(mrp)



for(let i=0;i<product[0].fit_design.length;i++)
{
    var fit_box = document.createElement("div");
    fit_box.append(product[0].fit_design[i])
    document.querySelector(".type").append(fit_box)
    
}


var cart_arr = JSON.parse(localStorage.getItem("cart_item"))||[]
document.getElementById("add_to_bag").addEventListener("click",addtocart)
function addtocart()
{
    cart_arr.push(product[0])

     localStorage.setItem("cart_item",JSON.stringify(cart_arr))
     window.location.reload();
}

//window.location(reload)
if(cart_arr.length==0)
{
   
    var link = document.getElementById("linktocart")
    link.setAttribute("href","Empty_cart.html")
    
}
else
{
   
    var link = document.getElementById("linktocart")
    link.setAttribute("href","added_cart.html")
    
}



// var link = document.getElementById("linktocart")
// var checkcart = localStorage.getItem("getarr")
// if(cart_arr.length>0)
// {
//     link.setAttribute("href","http://127.0.0.1:5502/Bewakoof/chirag(cart&product)/added_cart.html")
// }
// else
// {
//     link.setAttribute("http://127.0.0.1:5502/Bewakoof/chirag(cart&product)/Empty_cart.html")
// }
// console.log(checkcart.length)
