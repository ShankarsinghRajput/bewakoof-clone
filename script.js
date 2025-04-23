let productCard = document.querySelector(".product-card");  // Step 1
let productName = productCard.querySelector(".product-name");  // Step 2
productName.textContent = "Cristiano ronaldo's shirt";  // Step 3

// let productPrice = document.querySelector(".price");
// let currentPrice = currentPrice.querySelector(".current-price");
// currentprice.textContent = "1000$";

let currentPrice = productCard.querySelector(".current-price");
currentPrice.textContent = "₹2299$";



let discountPrice = productCard.querySelector(".discount");
discountPrice.textContent = "77%"



const btn = document.querySelector("#continue-btn");


if (btn) {
  btn.style.width = "100%";
  btn.style.backgroundColor = "#e0e0e0";
  btn.style.fontWeight = "bold";
  btn.style.cursor = "pointer"; 
}-
