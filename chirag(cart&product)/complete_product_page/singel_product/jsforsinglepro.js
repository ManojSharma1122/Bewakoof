
let product = JSON.parse(localStorage.getItem("single_prod"));
console.log(product);

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




// let brnd_name = document.querySelector("h2");
// brnd_name.textContent = product.merchandise;

// let brand_dscr = document.querySelector("p");
// brand_dscr.textContent = product.brand_description;

// let rate = document.querySelector("h4");
// rate.textContent = product.price;

// let mrp = document.querySelector("h5")
// mrp.textContent = product.mrp;
// mrp.style.textDecoration = "line-through";

// let cart_mens = JSON.parse(localStorage.getItem("bewakoof_cart")) || [];

// let addToCart = () => {

//     localStorage.setItem('bewakoof_cart', JSON.stringify(cart_mens));
//     console.log(product)
// }

// document.querySelector('.cart>div:nth-child(1)').addEventListener('click', addToCart);
