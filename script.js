
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("plus") || e.target.classList.contains("minus")) {
    const wrapper = e.target.closest(".qty-controls");
    const input = wrapper.querySelector(".qty-input");
    let value = parseInt(input.value, 10) || 1;

    if (e.target.classList.contains("plus")) {
      value++;
    } else {
      value = Math.max(1, value - 1); 
    }

    input.value = value;

   
    if (e.target.closest(".cart-item")) {
      updateCartTotals();
    }
  }
});


function updateCartTotals() {
  const rows = document.querySelectorAll(".cart-item");
  let grand = 0;

  rows.forEach(row => {
    const price = Number(row.getAttribute("data-price")); 
    const qty = Number(row.querySelector(".qty-input").value) || 1;
    const rowTotal = price * qty;
    grand += rowTotal;
    row.querySelector(".item-total").textContent = "₹" + rowTotal;
  });

  const grandSpan = document.getElementById("grand-total");
  if (grandSpan) {
    grandSpan.textContent = grand;
  }
}


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const card = e.target.closest(".product-card");
    const name = card.getAttribute("data-name");
    const price = Number(card.getAttribute("data-price"));
    const qty = Number(card.querySelector(".qty-input").value) || 1;

   
    alert(`${name} (x${qty}) added to cart at ₹${price} each`);
  }
});
