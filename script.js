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
