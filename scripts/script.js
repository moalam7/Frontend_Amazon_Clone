let cart = [];

function addToCart(name, price) {
  const item = { name: name, price: price };
  cart.push(item);
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    cartItems.innerHTML += `
      <div class="row product">
        <div class="col-6">
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>
      </div>
    `;
    totalPrice += item.price;
  });

  // Display total price
  cartItems.innerHTML += `<hr><p class="fw-bold">Total: $${totalPrice.toFixed(2)}</p>`;
}

function checkout() {
  // Redirect to checkout page
  window.location.href = '../checkout/checkout.html';
}

displayCart();
