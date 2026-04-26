/* =========================
script.js
========================= */

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu when clicking link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Buy Buttons
document.querySelectorAll(".buy-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for choosing LONELY-X BOOKSTORE!");
  });
});

// Contact Form
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
  e.preventDefault();

  formMessage.textContent = "Message sent successfully!";
  form.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
});
