var getarr = JSON.parse(localStorage.getItem("cart_item")) || [];

console.log(document.querySelector(".bottom"));

display();

function display() {
  getarr.map(function (ele, b) {
    var name = document.createElement("p");
    name.setAttribute("id", "name");
    name.textContent = ele.name;

    var price = document.createElement("p");
    price.setAttribute("id", "price");
    price.setAttribute("id", "price");
    price.textContent = "₹" + ele.price;

    var mrp = document.createElement("p");
    mrp.setAttribute("id", "mrp");
    mrp.textContent = "₹" + ele.mrp;
    var price_box = document.createElement("div");
    price_box.setAttribute("id", "price_box");
    price_box.append(price, mrp);

    var img_div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", ele.img);
    image.setAttribute("id", "img_div");
    img_div.append(image);

    var save = document.createElement("p");
    save.style.color = "green";
    save.textContent = "You saved ₹" + (ele.mrp - ele.price) + "  !";

    frag = document.createDocumentFragment()
    select = document.createElement("select")
    select.setAttribute("id","quant")

    select.options.add(new Option("1", "1"));
    select.options.add(new Option("2", "2"));
    select.options.add(new Option("3", "3"));
    select.options.add(new Option("4", "4"));
    select.options.add(new Option("5", "5"));
    select.options.add(new Option("6", "6"));

    frag.appendChild(select);
    // console.log(document.getElementById("quant"))

    var del = document.createElement("button");
    del.textContent = "Remove";
    del.addEventListener("click",function()
    {
      delete_item(ele)
    })



    var discribe = document.createElement("div");
    discribe.setAttribute("id", "discribe");
    discribe.append(name, price_box, save, frag,del);

    var par = document.createElement("div");
    par.setAttribute("id", "par");
    par.append(discribe, img_div);

    document.querySelector(".bottom").append(par); 
  });
}

console.log(getarr)


var total = getarr.reduce(function (acc, curr) {
  return acc + curr.price;
}, 0);
var t = document.getElementById("total");
t.textContent = "Total" + "   " + total;

var item = document.createElement("h1");
item.textContent = getarr.length + " ITEM(s)";
document.getElementById("item_count").append(item);




function  delete_item(i)
{
    var modify = getarr.splice(i,1) 
    location.reload()
}