let cart = [];

/* OPEN / CLOSE CART */
function toggleCart() {
  const cart = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");

  cart.classList.toggle("open");
  overlay.classList.toggle("open");
}


/* ADD TO CART */
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  updateCart();
document.getElementById("cartDrawer").classList.add("open");
document.getElementById("cartOverlay").classList.add("open");

}


/* REMOVE ITEM COMPLETELY */
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

/* DECREASE QUANTITY */
function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  } else {
    removeFromCart(index);
  }
  updateCart();
}

/* UPDATE CART UI */
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <div class="cart-controls">
            <button onclick="decreaseQty(${index})">−</button>
            <span>${item.qty}</span>
            <button onclick="addToCart('${item.name}', ${item.price})">+</button>
          </div>
        </div>

        <div class="cart-item-right">
          <span>₹${item.price * item.qty}</span>
          <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        </div>
      </div>
    `;
  });

  cartTotal.innerText = total;
}

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-placeholder");

  if (!footerContainer) return;

  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      footerContainer.innerHTML = html;

      const footer = document.getElementById("site-footer");
      if (!footer) return;

      const footerObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              footer.classList.add("footer-visible");
              footerObserver.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );

      footerObserver.observe(footer);
    })
    .catch(err => console.error("Footer load failed", err));
});

document.querySelectorAll(".animate-words").forEach(el => {
  const words = el.innerText.split(" ");
  el.innerHTML = words
    .map((w, i) =>
      `<span style="animation-delay:${i * 0.15}s">${w}</span>`
    )
    .join(" ");
});
