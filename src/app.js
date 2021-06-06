const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");

const swap = document.getElementById("swap");

const calcluate = () => {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (rate * amountEl_one.value).toFixed(1);
    });
};

calcluate();

//Event listeners

currencyEl_one.addEventListener("change", calcluate);
currencyEl_two.addEventListener("change", calcluate);
amountEl_one.addEventListener("input", calcluate);
amountEl_two.addEventListener("input", calcluate);
