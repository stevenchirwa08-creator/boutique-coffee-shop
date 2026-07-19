
function toggleDetails(id) {
    const element = document.getElementById(id);

    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;

        if (currentDisplay === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }

}

function closeModal() {
    document.getElementById('discountModal').style.display = 'none';
    closeModal();
}
function closeSubscriptionModal() {
    document.getElementById('subscription-modal').style.display = 'none';
}
function openSubscriptionModal() {
    document.getElementById('subscription-modal').style.display = 'block';
}
let totalAmount = 0;

function addToCart(itemName, itemPrice) {
    const cartList = document.getElementById("cart-items-list");
    if (!cartList) return;
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${itemName}</span>
        <span>MWK ${itemPrice.toLocaleString()}</span>`;
    cartList.appendChild(li);
    totalAmount += itemPrice;
    const totalDisplay = document.getElementById("total-price");
    if (totalDisplay) {
        totalDisplay.textContent =
            totalAmount.toLocaleString();
    }
}
function clearCart(){
    const cartList = document.getElementById("cart-items-list")
    cartList.innerHTML ="";
    totalAmount =0;
    document.getElementById("total-price").textContent =
    totalAmount.toLocaleString();
}
function showForm() {
  const form = document.querySelector('.form');
  form.style.display = 'flex';
}

function hideForm() {
  const form = document.querySelector('.form');
  form.style.display = 'none';
}