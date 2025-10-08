export let cartData = JSON.parse(localStorage.getItem("cart")) || [];

// Save to storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartData));
}

// Add item (increase qty if already exists)
export function insertToCart(item) {
  const existing = cartData.find(c => c.title === item.title);
  if (existing) {
    existing.qty += 1;
  } else {
    cartData.push({ ...item, qty: 1 });
  }
  saveCart();
}

// Delete item by index
export function deleteFromCart(i) {
  cartData.splice(i, 1);
  saveCart();
}

// Update qty
export function updateQty(index, qty) {
  if (qty <= 0) {
    deleteFromCart(index);
  } else {
    cartData[index].qty = qty;
  }
  saveCart();
}

// Total calculator
export function getCartTotal() {
  return cartData.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// Total items
export function getCartCount() {
  return cartData.reduce((sum, item) => sum + item.qty, 0);
}
