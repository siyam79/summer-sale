
let totalPrice = 0;

//  Function Create 

let applyButton = document.getElementById("applyButton");
let purchaseButton = document.getElementById("purchaseButton");
let productItems = document.querySelectorAll(".product-item");

for (let productItem of productItems) {

    // div class addEvenListener 

    productItem.addEventListener("click", function (event) {
        let titleElement = productItem.children[1].children[1];
        let priceElement = productItem.children[1].children[2].children[0];
        let title = getInnerText(titleElement)
        let price = getInnerText(priceElement)
        let getPriceConverInNumber = stringToNumber(price);

        //  price ke convert Number 
        function stringToNumber(data) {
            let value = parseFloat(data);
            return value;
        };

        function getInnerText(finder) {
            let finderElement = finder.innerText;
            return finderElement;
        };


        //  ol iteam Create

        let cartItems = document.getElementById("card-item");
        let li = document.createElement("li");
        li.className = 'text-lg font-semibold';
        li.innerText = title;
        cartItems.appendChild(li);

        //  iteam price add

        totalPrice += getPriceConverInNumber;
        innertextArValue('totalPrice', totalPrice.toFixed(2));
        innertextArValue('finalTotalPrice', totalPrice.toFixed(2));
        buttonStyle();

    });
};

//  event ar kaj orthad  button a addEventListener

applyButton.addEventListener("click", function (event) {
    let couponCodeInput = document.getElementById("coupon-input");
    let inputValue = couponCodeInput.value;

    couponCodeInput.value = '';


    let coupon = 'SELL200';

    if (coupon === inputValue) {
        let result = calculationPrice(totalPrice, 20);
        innertextArValue('discountPrice', result.toFixed(2));
        innertextArValue('finalTotalPrice', (totalPrice - result).toFixed(2));
    };
});
function buttonStyle() {
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    } else {
        applyButton.setAttribute('disabled', true);

    };

    if (totalPrice > 0) {
        purchaseButton.removeAttribute('disabled');

    } else {
        purchaseButton.setAttribute('disabled', true);

    };
};

document.getElementById("goHomeHomeButton").addEventListener("click", function (event) {
    totalPrice = 0;
    innertextArValue('totalPrice', '00.00');
    innertextArValue('finalTotalPrice', '00.00');
    innertextArValue('discountPrice', '00.00');
    buttonStyle();


    //   ol ar moddo create element

    let cartItems = document.getElementById("card-item");
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);

    };
});

    //  inner text set 

function innertextArValue(finder, text) {
    let findElement = document.getElementById(finder);
    let value = parseFloat(findElement.innerText);

        // NaN  value cheak

    if (isNaN(value)) {
        return;

    } else {
        findElement.innerText = text;
    };

};
//  calculationPrice  price and Discound 
function calculationPrice(total, discount) {
    let value = discount * total / 100
    return value;
};

