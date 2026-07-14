
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