document.addEventListener("DOMContentLoaded", () => {
  const planPrices = document.querySelectorAll(".plan__price");
  const mounthlyPrices = [19.99, 24.99, 39.99];
  const yearPrices = [199.99, 249.99, 399.99];
  planPrices.forEach((element, i) => {
    element.textContent += mounthlyPrices[i];
  });
});
