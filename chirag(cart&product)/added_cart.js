var getarr = JSON.parse(localStorage.getItem("added"))||[];
if(getarr.length>0)
{
    display()
}
else{
   
}
    
   
    function display(){
        getarr.map(function(ele)
        {
            var img = document.createElement("img")
            img.setAttribute("src",ele.image)

            var name = document.createElement("h3")
            name.textContent = ele.name

            var price = document.createElement("h3")
            price.textContent = ele.price;

            var del = document.createElement("button");
            del.textContent = "Delete"
            del.addEventListener("click",function()
            {
                deleted(ele)
            })
            var div = document.createElement("div")
            div.append(img,name,price,del)
            document.getElementById("parent").append(div)

        })
    }
    var total = getarr.reduce(function(acc,curr)
    {
        return acc + curr.price;
    },0)
    var t = document.getElementById("total")
            t.textContent = "Total"+"   "+total;

        var item = document.createElement("h1")
        item.textContent = getarr.length
        document.getElementById("item_count").append(item)



           function deleted(i)
           {
              var rem = getarr.splice(i,1)
              localStorage.setItem("array",JSON.stringify(getarr))
              location.reload();
              
           }