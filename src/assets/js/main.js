/* FreshBite Food Store - Main JS */

document.addEventListener("DOMContentLoaded", function () {
  console.log("FreshBite Template Loaded");

  // Initialize Bootstrap tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Dummy Add to Cart Interaction
  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Show toast notification
      // Note: In a real React app, this would be a state update
      alert("Item added to cart! (This is a demo interaction)");
    });
  });

  // Dummy Login Form Submission
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "index.html"; // Redirect to home for demo
    });
  }
});
