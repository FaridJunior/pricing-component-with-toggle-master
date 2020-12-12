document.addEventListener("DOMContentLoaded", () => {
  const planPrices = document.querySelectorAll("#price__value");
  const planTimeingMounthly = document.getElementById("plan-timeing-mounthly");
  const mounthlyPrices = [19.99, 24.99, 39.99];
  const yearPrices = [199.99, 249.99, 399.99];

  planTimeingMounthly.addEventListener("change", (e) => {
    if (e.target.checked) {
      setPlansPrices(mounthlyPrices);
    } else {
      setPlansPrices(yearPrices);
    }
  });
  function setPlansPrices(prices) {
    planPrices.forEach((element, i) => {
      element.textContent = prices[i];
    });
  }
  setPlansPrices(yearPrices);
});
