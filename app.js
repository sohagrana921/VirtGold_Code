// Nav JS
const openMenuButton = document.getElementById("openMenu");
const menuList = document.getElementById("menuList");
openMenuButton.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// mobileMenuToggle.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });

// Selecting the currency
function selectCurrency(currency) {
  const currencyElement = document.getElementById("currency");
  currencyElement.innerHTML = currency;
  hideCurrencyMenu();
}

function hideCurrencyMenu() {
  const currencyMenu = document.getElementById("currencyMenu");
  currencyMenu.classList.toggle("hidden");
}

// Selecting the currency for mobile
function selectCurrencyMobile(currency) {
  const currencyElement = document.getElementById("currencyMobile");
  currencyElement.innerHTML = currency;
  hideCurrencyMenuMobile();
}
function hideCurrencyMenuMobile() {
  const currencyMenu = document.getElementById("currencyMenuMobile");
  currencyMenu.classList.toggle("hidden");
}

// ------------------------
// Product1
const minusButton1 = document.getElementById("minus-button1");
const plusButton1 = document.getElementById("plus-button1");
const productQuantityInput1 = document.getElementById("product-Quantity1");
const totalValueInput1 = document.getElementById("totalValue1");

const productPrice1 = 1799;

let productQuantity1 = parseInt(productQuantityInput1.value);

// Update the total value based on the product price and quantity
function updateTotalValue1() {
  totalValueInput1.value = "$" + productPrice1 * productQuantity1;
}
// Update the total quantity based on the product price and quantity
function updateCartPlus() {
  let cartItem = document.getElementById("cartTotalItems");
  let cartPrice = document.getElementById("cartTotalPrice");

  cartItem.textContent = parseInt(cartItem.textContent) + 1;
  cartPrice.textContent = parseInt(cartPrice.textContent) + 1799;
}
function updateCartMinus() {
  let cartItem = document.getElementById("cartTotalItems");
  let cartPrice = document.getElementById("cartTotalPrice");
  cartItem.textContent = parseInt(cartItem.textContent) - 1;
  cartPrice.textContent = parseInt(cartPrice.textContent) - 1799;
}

plusButton1.addEventListener("click", () => {
  productQuantity1++;
  productQuantityInput1.value = productQuantity1;
  updateTotalValue1();
  updateCartPlus();
  let totalAmount = document.getElementById("total-cost");
  let totalAmountBtn = document.getElementById("total-cost-btn");
  let cartPrice = document.getElementById("cartTotalPrice");
  totalAmount.textContent = parseInt(cartPrice.textContent) + 5;
  totalAmountBtn.textContent = parseInt(cartPrice.textContent) + 5;
});
minusButton1.addEventListener("click", () => {
  if (productQuantity1 > 1) {
    productQuantity1--;
    productQuantityInput1.value = productQuantity1;
    updateTotalValue1();
    updateCartMinus();
    let totalAmount = document.getElementById("total-cost");
    let totalAmountBtn = document.getElementById("total-cost-btn");
    let cartPrice = document.getElementById("cartTotalPrice");
    totalAmount.textContent = parseInt(cartPrice.textContent) - 5;
    totalAmountBtn.textContent = parseInt(cartPrice.textContent) - 5;
  }
});

// Product2
const minusButton2 = document.getElementById("minus-button2");
const plusButton2 = document.getElementById("plus-button2");
const productQuantityInput2 = document.getElementById("product-Quantity2");
const totalValueInput2 = document.getElementById("totalValue2");

const productPrice2 = 1799;

let productQuantity2 = parseInt(productQuantityInput2.value);

// Update the total value based on the product price and quantity
function updateTotalValue2() {
  totalValueInput2.value = "$" + productPrice2 * productQuantity2;
}
// Update the total quantity based on the product price and quantity
function updateCartPlus() {
  let cartItem = document.getElementById("cartTotalItems");
  let cartPrice = document.getElementById("cartTotalPrice");
  cartItem.textContent = parseInt(cartItem.textContent) + 1;
  cartPrice.textContent = parseInt(cartPrice.textContent) + 1799;
}
function updateCartMinus() {
  let cartItem = document.getElementById("cartTotalItems");
  let cartPrice = document.getElementById("cartTotalPrice");
  cartItem.textContent = parseInt(cartItem.textContent) - 1;
  cartPrice.textContent = parseInt(cartPrice.textContent) - 1799;
}
minusButton2.addEventListener("click", () => {
  if (productQuantity2 > 1) {
    productQuantity2--;
    productQuantityInput2.value = productQuantity2;
    updateTotalValue2();
    updateCartMinus();
    let totalAmount = document.getElementById("total-cost");
    let totalAmountBtn = document.getElementById("total-cost-btn");
    let cartPrice = document.getElementById("cartTotalPrice");
    totalAmount.textContent = parseInt(cartPrice.textContent) - 5;
    totalAmountBtn.textContent = parseInt(cartPrice.textContent) - 5;
  }
});

plusButton2.addEventListener("click", () => {
  productQuantity2++;
  productQuantityInput2.value = productQuantity2;
  updateTotalValue2();
  updateCartPlus();
  let totalAmount = document.getElementById("total-cost");
  let totalAmountBtn = document.getElementById("total-cost-btn");
  let cartPrice = document.getElementById("cartTotalPrice");
  totalAmount.textContent = parseInt(cartPrice.textContent) + 5;
  totalAmountBtn.textContent = parseInt(cartPrice.textContent) + 5;
});
// Product3
const minusButton3 = document.getElementById("minus-button3");
const plusButton3 = document.getElementById("plus-button3");
const productQuantityInput3 = document.getElementById("product-Quantity3");
const totalValueInput3 = document.getElementById("totalValue3");

const productPrice3 = 1799;

let productQuantity3 = parseInt(productQuantityInput3.value);

// Update the total value based on the product price and quantity
function updateTotalValue3() {
  totalValueInput3.value = "$" + productPrice3 * productQuantity3;
}
// Update the total quantity based on the product price and quantity
function updateCartPlus() {
  let cartItem = document.getElementById("cartTotalItems");
  let cartPrice = document.getElementById("cartTotalPrice");
  cartItem.textContent = parseInt(cartItem.textContent) + 1;
  cartPrice.textContent = parseInt(cartPrice.textContent) + 1799;
}
function updateCartMinus() {
  let cartItem = document.getElementById("cartTotalItems");
  let cartPrice = document.getElementById("cartTotalPrice");
  cartItem.textContent = parseInt(cartItem.textContent) - 1;
  cartPrice.textContent = parseInt(cartPrice.textContent) - 1799;
}
minusButton3.addEventListener("click", () => {
  if (productQuantity3 > 1) {
    productQuantity3--;
    productQuantityInput3.value = productQuantity3;
    updateTotalValue3();
    updateCartMinus();
    let totalAmount = document.getElementById("total-cost");
    let totalAmountBtn = document.getElementById("total-cost-btn");
    let cartPrice = document.getElementById("cartTotalPrice");
    totalAmount.textContent = parseInt(cartPrice.textContent) - 5;
    totalAmountBtn.textContent = parseInt(cartPrice.textContent) - 5;
  }
});

plusButton3.addEventListener("click", () => {
  productQuantity3++;
  productQuantityInput3.value = productQuantity3;
  updateTotalValue3();
  updateCartPlus();
  let totalAmount = document.getElementById("total-cost");
  let totalAmountBtn = document.getElementById("total-cost-btn");
  let cartPrice = document.getElementById("cartTotalPrice");
  totalAmount.textContent = parseInt(cartPrice.textContent) + 5;
  totalAmountBtn.textContent = parseInt(cartPrice.textContent) + 5;
});
// -----------------
document
  .getElementById("delivery-option")
  .addEventListener("click", function () {
    var deliveryOptions = document.getElementById("delivery-options");
    if (deliveryOptions.classList.contains("hidden")) {
      deliveryOptions.classList.remove("hidden");
    } else {
      deliveryOptions.classList.add("hidden");
    }
  });
function selectDeliveryOption(optionText, cost) {
  var deliveryOptions = document.getElementById("delivery-options");
  var selectedDeliveryText = document.getElementById("delivery-option-text");
  var selectedDeliveryBox = document.getElementById("selected-delivery");

  selectedDeliveryText.textContent = optionText;
  selectedDeliveryBox.classList.remove("hidden");

  // Hide the delivery options after selection (optional)
  deliveryOptions.classList.add("hidden");
}
//----------------For Mobile-------------------
// product-1
const plusBtn1 = document.getElementById("plus-button1-mob");
const minusBtn1 = document.getElementById("minus-button1-mob");

const productQuantityInput1Mob = document.getElementById(
  "product-Quantity1-mob"
);
const mobTotal1 = document.getElementById("mob-total");
const mobTotal1T = document.getElementById("mob-total-t");
let productQuantity1Mob = parseInt(productQuantityInput1Mob.value);

plusBtn1.addEventListener("click", () => {
  productQuantity1Mob++;
  productQuantityInput1Mob.value = productQuantity1Mob;
  mobTotal1.textContent = parseInt(productQuantityInput1Mob.value) * 1799;
  mobTotal1T.textContent = parseInt(productQuantityInput1Mob.value) * 1799;
});
minusBtn1.addEventListener("click", () => {
  if (productQuantity1Mob > 1) {
    productQuantity1Mob--;
    productQuantityInput1Mob.value = productQuantity1Mob;
    mobTotal1.textContent = parseInt(productQuantityInput1Mob.value) * 1799;
    mobTotal1T.textContent = parseInt(productQuantityInput1Mob.value) * 1799;
  }
});

// product-2
const plusBtn2 = document.getElementById("plus-button2-mob");
const minusBtn2 = document.getElementById("minus-button2-mob");

const productQuantityInput2Mob = document.getElementById(
  "product-Quantity2-mob"
);
const mobTotal2 = document.getElementById("mob-total");
const mobTotal2T = document.getElementById("mob-total-t");
let productQuantity2Mob = parseInt(productQuantityInput2Mob.value);

plusBtn2.addEventListener("click", () => {
  productQuantity2Mob++;
  productQuantityInput2Mob.value = productQuantity2Mob;
  mobTotal2.textContent = parseInt(productQuantityInput2Mob.value) * 1799;
  mobTotal2T.textContent = parseInt(productQuantityInput2Mob.value) * 1799;
});
minusBtn2.addEventListener("click", () => {
  if (productQuantity2Mob > 1) {
    productQuantity2Mob--;
    productQuantityInput2Mob.value = productQuantity2Mob;
    mobTotal2.textContent = parseInt(productQuantityInput2Mob.value) * 1799;
    mobTotal2T.textContent = parseInt(productQuantityInput2Mob.value) * 1799;
  }
});
// product-3
const plusBtn3 = document.getElementById("plus-button3-mob");
const minusBtn3 = document.getElementById("minus-button3-mob");

const productQuantityInput3Mob = document.getElementById(
  "product-Quantity3-mob"
);
const mobTotal = document.getElementById("mob-total");
const mobTotal3T = document.getElementById("mob-total-t");

let productQuantity3Mob = parseInt(productQuantityInput3Mob.value);

plusBtn3.addEventListener("click", () => {
  productQuantity3Mob++;
  productQuantityInput3Mob.value = productQuantity3Mob;
  mobTotal.textContent = parseInt(productQuantityInput3Mob.value) * 1799;
  mobTotal3T.textContent = parseInt(productQuantityInput3Mob.value) * 1799;
});
minusBtn3.addEventListener("click", () => {
  if (productQuantity3Mob > 1) {
    productQuantity3Mob--;
    productQuantityInput3Mob.value = productQuantity3Mob;
    mobTotal3T.textContent = parseInt(productQuantityInput3Mob.value) * 1799;
  }
});
