let productCont = document.querySelector(".productsList");
let cartContainer = document.querySelector(".cart")
let emptyMessage = document.querySelector(".nullMessage");

const productList = [
  { id: 1, name: "Smart Watch", price: 500 },
  { id: 2, name: "Clock", price: 300 },
  { id: 3, name: "Goggles", price: 300 },
  { id: 4, name: "Speakers", price:1000 },
  { id: 5, name: "Clothing", price: 500 },
  { id: 6, name: "Guitar", price: 2000 },
  { id: 7, name: "Laptops", price: 30000 },
  { id: 8, name: "Smart Phones", price: 15000 },
  { id: 9, name: "Coffee Machine", price: 20000 },
  { id: 10, name: "USB Chargers", price: 2000 },
];

window.onload = () => {
  productList.forEach((productCart) => {
    let list = document.createElement("div");
    list.classList.add("productDiv");
    // console.log(list);
    list.innerHTML = `<div class="productDiv">
        <div class="product-name">${productCart.name}</div>
        <div class="product-price">${productCart.price}</div>
        <div class="countOfProduct">
            <button class="minus">-</button>
            <div class="countDisplay">0</div>
            <button class="plus">+</button>
        </div>
    </div>`
    productCont.appendChild(list);

  });
};

function cartCard(e, countValue){
    e.target.parentNode.children[1].innerText = countValue;
    let productCard = e.target.parentNode.parentNode.children[0].innerText;
    productList.forEach((arr) =>{
        if(arr.name === productCard){
            arr.quantity = countValue;
            // console.log(arr);
        }
    })
    let innerCart = document.querySelector(".addedProducts");
    let total = document.querySelector(".price");
    innerCart.innerHTML = ""; 
    let totalPrice = 0;

    productList.forEach((arr) =>{
        
        if(arr.quantity > 0){
            const productRendered = document.createElement("div");
            productRendered.classList.add("total");
            productRendered.innerHTML = `
            <div class="cartName">${arr.name}</div>
            <div class="cartPrice"><span>${arr.quantity} </span><span> x </span> ${arr.price} </div>`

            
            totalPrice += arr.quantity * arr.price;
            innerCart.appendChild(productRendered);
        }
        console.log(total.innerText);
        
    })
    total.innerText = totalPrice;

    if(innerCart.children.length === 0){
        innerCart.appendChild(emptyMessage);
    }
}

productCont.addEventListener("click" , function(e){
    // console.log(e.target.innerText === "+");
   
    if(e.target.innerText === "+"){
        let count = parseInt(e.target.parentNode.children[1].innerText);
        count++;
        cartCard(e, count);
        
    }else if(e.target.innerText === "-"){
        let count = parseInt(e.target.parentNode.children[1].innerText);
        if(count > 0){
            count--;
            cartCard(e, count);
        }else{
            alert("Action not possible");
            return;
        }
        
        
    }
});





// cart

