//

const sliderHandle = document.querySelector(".slider-handle");
const sliderfill = document.querySelector(".slider-fill");
const sliderInput = document.querySelector("#slider-input");
const pageViews = document.querySelector(".pageviews-title");
const priceValue = document.querySelector(".price-value");
const priceType = document.querySelector(".price-type");
const billingCheckbox = document.querySelector("#billing-type-checkbox");
let multiplier = 0.16;

//
let sliderFillArray = [0, 25, 50, 75, 100];
let pageviewsArray = ["10K", "50K", "100K", "500K", "1M"];
let pageviewsNumericArray = [10, 50, 100, 500, 1000];

sliderInput.addEventListener("input", function () {
  sliderHandle.style.left = sliderFillArray[sliderInput.value] - 10 + "%";
  sliderfill.style.width = sliderFillArray[sliderInput.value] + "%";
  pageViews.innerHTML = `${pageviewsArray[sliderInput.value]} Pageviews`;
  priceValue.innerHTML = `$${parseFloat(
    pageviewsNumericArray[sliderInput.value] * multiplier
  ).toFixed(2)}`;
});

//

billingCheckbox.addEventListener("change", function () {
  if (billingCheckbox.checked) {
    priceType.innerHTML = "/ year";
    multiplier = 0.16 * 12 - 0.16 * 12 * 0.25;
    priceValue.innerHTML = `$${parseFloat(
      pageviewsNumericArray[sliderInput.value] * multiplier
    ).toFixed(2)}`;
  } else {
    priceType.innerHTML = "/ month";
    multiplier = 0.16;
    priceValue.innerHTML = `$${parseFloat(
      pageviewsNumericArray[sliderInput.value] * multiplier
    ).toFixed(2)}`;
  }
});
