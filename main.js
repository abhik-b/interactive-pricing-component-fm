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

sliderInput.addEventListener("input", function () {
  sliderHandle.style.left = sliderInput.value - 10 + "%";
  sliderfill.style.width = sliderInput.value + "%";
  pageViews.innerHTML = `${sliderInput.value * 2}K Pageviews`;
  priceValue.innerHTML = `$${parseFloat(
    sliderInput.value * 2 * multiplier
  ).toFixed(2)}`;
});

//

billingCheckbox.addEventListener("change", function () {
  if (billingCheckbox.checked) {
    priceType.innerHTML = "/ year";
    multiplier = 1.44;
    priceValue.innerHTML = `$${parseFloat(
      sliderInput.value * 2 * multiplier
    ).toFixed(2)}`;
  } else {
    priceType.innerHTML = "/ month";
    multiplier = 0.16;
    priceValue.innerHTML = `$${parseFloat(
      sliderInput.value * 2 * multiplier
    ).toFixed(2)}`;
  }
});
