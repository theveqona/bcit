let hamburger = 
document.getElementbyId("hamburger");

let nav =
document.querySelector(".nav");

hamburger.addEventListener("click", function() {
nav.classList.toggle("active");
});
