/* ═══════════════════════════════════════════
   cart.js — Cart Management
   ═══════════════════════════════════════════ */

let cart = [];

function addToCart(item) {
  // Check if item already exists
  const existing = cart.find(c =>
    c.item_id === item.item_id && c.size === (item.size || null)
  );

  if (existing) {
    existing.quantity += item.quantity || 1;
  } else {
    cart.push({
      item_id: item.item_id,
      item_name: item.item_name,
      quantity: item.quantity || 1,
      size: item.size || null,
      price: item.price
    });
  }

  renderCart();
  showConfirmSection();
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.item_id !== itemId);
  renderCart();
  if (cart.length === 0) hideConfirmSection();
}

function clearCart() {
  cart = [];
  renderCart();
  hideConfirmSection();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Your cart is empty<br>Order by voice \u2014 items appear here</div>';
    totalEl.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span>${item.quantity}x ${item.item_name}${item.size ? ' (' + item.size + ')' : ''}</span>
      <span>\u20B9${item.price * item.quantity}</span>
    </div>
  `).join('');

  const total = getCartTotal();
  document.getElementById('cart-total-amount').textContent = `\u20B9${total}`;
  totalEl.style.display = 'flex';
}

function showConfirmSection() {
  document.getElementById('confirm-section').style.display = 'block';
}

function hideConfirmSection() {
  document.getElementById('confirm-section').style.display = 'none';
}

function applyCartUpdates(updates) {
  if (!updates || updates.length === 0) return;

  updates.forEach(update => {
    if (update.action === 'add') {
      addToCart({
        item_id: update.item_id,
        item_name: update.item_name,
        quantity: update.quantity || 1,
        size: update.size,
        price: update.price
      });
    } else if (update.action === 'remove') {
      removeFromCart(update.item_id);
    } else if (update.action === 'clear') {
      clearCart();
    }
  });
}

function confirmOrder() {
  if (cart.length === 0) return;

  const orderId = '#' + (1000 + Math.floor(Math.random() * 9000));
  const total = getCartTotal();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Save to localStorage for kitchen display
  const orders = JSON.parse(localStorage.getItem('mcd_orders') || '[]');
  orders.push({
    id: orderId,
    items: [...cart],
    total,
    language: typeof currentLanguage !== 'undefined' ? currentLanguage : 'en-IN',
    timestamp: new Date().toISOString(),
    status: 'new'
  });
  localStorage.setItem('mcd_orders', JSON.stringify(orders));

  // Show modal
  const modal = document.getElementById('order-modal');
  document.getElementById('modal-summary').textContent = `${itemCount} item${itemCount > 1 ? 's' : ''} \u2022 \u20B9${total}`;
  document.getElementById('modal-order-id').textContent = `Order ${orderId}`;
  modal.style.display = 'flex';

  // Clear cart
  clearCart();
}

// Initialize confirm button
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('confirm-btn').addEventListener('click', confirmOrder);

  document.getElementById('modal-close-btn').addEventListener('click', () => {
    document.getElementById('order-modal').style.display = 'none';
    // Full reset to original state
    document.getElementById('conversation').innerHTML = '';
    const badge = document.getElementById('language-badge');
    if (badge) badge.style.display = 'none';
    document.getElementById('mic-label').textContent = 'Tap to start';
    document.getElementById('mic-btn').classList.remove('active', 'recording');
    hideConfirmSection();
    // Reset menu to English
    if (typeof resetMenuLanguage === 'function') resetMenuLanguage();
    // Reset session state in order.js
    if (typeof currentLanguage !== 'undefined') currentLanguage = null;
    if (typeof conversationHistory !== 'undefined') conversationHistory = [];
    if (typeof isSessionActive !== 'undefined') isSessionActive = false;
    if (typeof sessionPhase !== 'undefined') sessionPhase = 'idle';
  });

  document.getElementById('add-more-btn').addEventListener('click', () => {
    document.getElementById('mic-btn').click();
  });
});
