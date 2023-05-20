const closebtn = document.querySelector(".close-btn")
const dropDown = document.querySelector(".flag-container")
const countryInput = document.querySelector(".country")

countryInput.addEventListener("click", ()=>{
 dropDown.style.display = "block"
})
closebtn.addEventListener("click", ()=>{
 dropDown.style.display = "none"
})