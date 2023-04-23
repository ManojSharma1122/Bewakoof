
let product = JSON.parse(localStorage.getItem("single_prod"))||[];

var link = product[0].img;
var image = document.createElement("img")
image.setAttribute("src",link)

var image_div = document.querySelector(".img")
image_div.append(image)

var brnd_name = product[0].merchandise;
document.getElementById("uniqb").append(brnd_name)

var names = product[0].name
document.getElementById("uniqn").append(names)

var price = product[0].price
document.querySelector("h4").append(price)

var mrp = product[0].mrp
var max_div = document.createElement("div")
max_div.style.textDecoration = "line-through"
max_div.append(mrp)
var mrps = document.querySelector("h4").append(max_div)



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
