
const products = [
  { id: 1, name: "Wireless Mouse", price: 15.99, emoji: "🖱️" },
  { id: 2, name: "Keyboard",       price: 29.99, emoji: "⌨️" },
  { id: 3, name: "Headphones",     price: 39.99, emoji: "🎧" },
  { id: 4, name: "Webcam",         price: 24.50, emoji: "📷" },
  { id: 5, name: "USB Drive",      price: 9.99,  emoji: "💾" },
  { id: 6, name: "Laptop Stand",   price: 19.99, emoji: "💻" },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartSection = document.getElementById("cart-section");
const cartItemsDiv = document.getElementById("cart-items");
const cartCountSpan = document.getElementById("cart-count");
const cartTotalText = document.getElementById("cart-total");

const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const checkoutBtn = document.getElementById("checkout-btn");

function displayProducts() {
  productList.innerHTML = ""; 


  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const card = document.createElement("div");
    card.className = "product-card";

  
    card.innerHTML = `
      <div>${product.emoji}</div>
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    const button = card.querySelector("button");
    button.addEventListener("click", function () {
      addToCart(product.id);
    });
    productList.appendChild(card);
  }
}

function addToCart(productId) {

  const existingItem = cart.find(function (item) {
    return item.id === productId;
  });

  if (existingItem) {
  
    existingItem.quantity = existingItem.quantity + 1;
  } else {

    cart.push({ id: productId, quantity: 1 });
  }

  updateCartCount();
}

function removeFromCart(productId) {
  cart = cart.filter(function (item) {
    return item.id !== productId;
  });

  updateCartCount();
  displayCart(); 
}

function updateCartCount() {
  let totalItems = 0;

  for (let i = 0; i < cart.length; i++) {
    totalItems = totalItems + cart[i].quantity;
  }

  cartCountSpan.textContent = totalItems;
}


function calculateTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];

  
    const product = products.find(function (p) {
      return p.id === cartItem.id;
    });

    total = total + product.price * cartItem.quantity;
  }

  return total;
}


function displayCart() {
  cartItemsDiv.innerHTML = ""; 

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];

      const product = products.find(function (p) {
        return p.id === cartItem.id;
      });

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <span>${product.emoji} ${product.name} x ${cartItem.quantity}</span>
        <span>
          $${(product.price * cartItem.quantity).toFixed(2)}
          <button>Remove</button>
        </span>
      `;


      const removeButton = row.querySelector("button");
      removeButton.addEventListener("click", function () {
        removeFromCart(product.id);
      });

      cartItemsDiv.appendChild(row);
    }
  }


  const total = calculateTotal();
  cartTotalText.textContent = "Total: $" + total.toFixed(2);
}

cartBtn.addEventListener("click", function () {
  displayCart(); 
  cartSection.classList.remove("hidden");
});

closeCartBtn.addEventListener("click", function () {
  cartSection.classList.add("hidden");
});


checkoutBtn.addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = calculateTotal();
  alert("Thanks for your order! Total: $" + total.toFixed(2));

  cart = [];
  updateCartCount();
  displayCart();
});


displayProducts();
