// Simple thank-you popup when form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  this.reset();
});
