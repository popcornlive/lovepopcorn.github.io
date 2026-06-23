const cartCount = document.querySelectorAll("#cartCount");
const addButtons = document.querySelectorAll(".add-to-cart");
let count = 0;

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.forEach(el => el.textContent = count);
    alert("Added to cart");
  });
});

const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    alert("Mobile menu can be added next.");
  });
}
