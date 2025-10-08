import { getCartTotal, deleteFromCart, updateQty, getCartCount, cartData } from './cart.js';

export function refreshCart(data) {
  const box = document.getElementById("cartBox");
  const totalBox = document.getElementById("grandTotal");
  const badge = document.getElementById("cartBadge");

  box.innerHTML = "";

  if (data.length === 0) {
    box.innerHTML = "<p>Your cart is empty 🛒</p>";
  }

  data.forEach((item, idx) => {
    const line = document.createElement("div");
    line.classList.add("cart-line");
    line.innerHTML = `
      <span>${item.title} - ₹${item.price} × 
        <input type="number" min="1" value="${item.qty}" style="width:45px;">
      </span>
      <button class="btn" style="background:#e53935;" data-id="${idx}">Remove</button>
    `;
    box.appendChild(line);
  });

  // Remove buttons
  box.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.getAttribute("data-id");
      deleteFromCart(id);
      refreshCart(cartData);
      showToast("Item removed ❌");
    });
  });

  // Quantity change
  box.querySelectorAll("input").forEach((inp, idx) => {
    inp.addEventListener("change", e => {
      updateQty(idx, parseInt(e.target.value));
      refreshCart(cartData);
    });
  });

  // Update totals
  totalBox.textContent = `Total: ₹${getCartTotal()}`;
  badge.textContent = getCartCount();
}
export function showToast(msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}


// Simple toast
export function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#323232";
  toast.style.color = "#fff";
  toast.style.padding = "10px 15px";
  toast.style.borderRadius = "6px";
  toast.style.opacity = "0.9";
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2000);
}
