
let product = JSON.parse(localStorage.getItem("item"));
console.log(product);

let image = document.querySelector("img");
image.setAttribute("src", product.image_url);
document.querySelector(".img").append(image);

let brnd_name = document.querySelector("h2");
brnd_name.textContent = product.brand;

let brand_dscr = document.querySelector("p");
brand_dscr.textContent = product.brand_description;

let rate = document.querySelector("h4");
rate.textContent = product.price;

let mrp = document.querySelector("h5")
mrp.textContent = product.striked_off_price;
mrp.style.textDecoration = "line-through";

let cart_mens = JSON.parse(localStorage.getItem("bewakoof_cart")) || [];

let addToCart = () => {

    localStorage.setItem('bewakoof_cart', JSON.stringify(cart_mens));
    console.log(product)
}

document.querySelector('.cart>div:nth-child(1)').addEventListener('click', addToCart);
