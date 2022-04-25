let submitBtn = document.getElementById("submit-el");
let paraEl = document.getElementById("para-el");
let infoEl = document.getElementById("info-el")
let hideBtn = document.getElementById("hide-btn")

submitBtn.addEventListener("click", function() {
  submitBtn.style.visibility = 'hidden';
  paraEl.innerText = "Your message has been delivered, Thanks!"
  hideBtn.style.visibility = 'visible'


})