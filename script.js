const menuButton = document.querySelector("#menuButton");
const mobileNav = document.querySelector("#mobileNav");
const cartStatus = document.querySelector("#cartStatus");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".heart").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.textContent = button.classList.contains("active") ? "♥" : "♡";
  });
});

document.querySelectorAll(".cart-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-card");
    const name = product?.dataset.name || "Product";
    const price = product?.dataset.price || "";
    cartStatus.textContent = `${name} added to cart${price ? ` — $${price}` : ""}.`;
  });
});
