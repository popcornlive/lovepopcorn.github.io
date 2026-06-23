const cartCountEls = document.querySelectorAll("#cartCount");
const addButtons = document.querySelectorAll(".add-to-cart");
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

let count = 0;

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    cartCountEls.forEach(el => el.textContent = count);
  });
});

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
