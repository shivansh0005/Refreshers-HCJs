const btnEl = document.getElementById("click");
const billInput = document.getElementById("a");
const tipInput = document.getElementById("b");
const totalSpan = document.getElementById("total");

function calculateTotal(e) {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
 e.preventDefault();
}

btnEl.addEventListener("click", calculateTotal);

// const btnEl = document.getElementById("click");
// const billInput = document.getElementById("a");
// const tipInput = document.getElementById("b");
// const totalSpan = document.getElementById("total");

// function calculateTotal() {
//   const billValue = billInput.value;
//   const tipValue = tipInput.value;
//   const totalValue = billValue * (1 + tipValue / 100);
//   totalSpan.innerText = totalValue.toFixed(2);
// }

// btnEl.addEventListener("click", calculateTotal);