const decreaseNumber = (decrement, itemprice1, product_total_amt) => {
    var itemval = document.getElementById(decrement);
    var itemprice1 = document.getElementById(itemprice1);
    var product_total_amt = document.getElementById(product_total_amt);
    var final_amt = document.querySelector('.total_cart_amt');

    if (itemval.value <= 0) {
        itemval.value = 0;
        alert('upto 0 only');
    }
    else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = 'black';
        itemprice1.innerHTML = parseInt(itemprice1.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;

        if (parseInt(product_total_amt.innerHTML) == 0) {
            final_amt.innerHTML = 0;
        }
        else {
            final_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 30;
        }
    }
    // console.log(final_amt);
}
const increaseNumber = (increment, itemprice1, product_total_amt) => {
    var itemval = document.getElementById(increment);
    var itemprice1 = document.getElementById(itemprice1);
    var product_total_amt = document.getElementById(product_total_amt);
    var final_amt = document.querySelector('.total_cart_amt');

    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    }
    else {

        itemval.value = parseInt(itemval.value) + 1;
        itemprice1.innerHTML = parseInt(itemprice1.innerHTML) + 15; //herre we cant use .value because it is only use dto fetch the current value of the tags like input area or text box 
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;

        final_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 30;
    }
    // console.log(product_total_amt.innerHTML);
    // console.log(itemprice1);
}