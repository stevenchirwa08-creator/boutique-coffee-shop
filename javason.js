
function showDetails() {
    let details = document.getElementById("details");
    if (details) {
        details.style.display = "block";
    }

    let details2 = document.getElementById("details2");
    if (details2) {
        details2.style.display = "block";
    }

     let details3 = document.getElementById("details3");
    if (details3) {
        details3.style.display = "block";
    }

     let details4 = document.getElementById("details4");
    if (details4) {
        details4.style.display = "block";
    }

     let details5 = document.getElementById("details5");
    if (details5) {
        details5.style.display = "block";
    }

     let details6 = document.getElementById("details6");
    if (details6) {
        details6.style.display = "block";
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