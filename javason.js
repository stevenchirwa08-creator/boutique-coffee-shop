
function toggleDetails(id) {
    const element = document.getElementById(id);

    if (element){
        const currentDisplay = window.getComputedStyle(element).display;

        if (currentDisplay === 'none'){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }

}

function closeModal(){
    document.getElementById('discountModal').style.display ='none';
closeModal();
}
function closeSubscriptionModal(){
    document.getElementById('subscription-modal').style.display ='none';
}
function openSubscriptionModal(){
    document.getElementById('subscription-modal').style.display ='block';
}
let totalAmount = 0;
function addToCart(itemName, itemPrice){
const cartList = document.getElementById("cart-list");
if (!cartList) return;
const li = document.createElement("li");
li.innerHTML = `<span>. ${itemName}</span> <span>MWK ${Price.toLocaleString()}</span>`;
cartList.appendChild(li);
cartTotal += Price;
const totalDisplay = document.getElementById("total-price");
if (totalDisplay){
    totalDisplay.textContent = cartTotal.toLocaleString();
}
}