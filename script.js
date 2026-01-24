let cart = [];

/* OPEN / CLOSE CART */
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
    document.getElementById("cartOverlay").classList.toggle("active");
}


/* ADD TO CART */
function addToCart(name, price) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    updateCart();
}

/* UPDATE CART UI */
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} × ${item.qty}</span>
                <span>₹${item.price * item.qty}</span>
            </div>
        `;
    });

    cartTotal.textContent = total;
    if (cartCount) cartCount.textContent = count;
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
