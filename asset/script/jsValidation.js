// javaScript validation!
// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// Selection
const Name = document.getElementsByClassName("name")
const email = document.getElementsByClassName("email")
const password = document.getElementsByClassName("password")
const cPassword = document.getElementsByClassName("cPassword")
const country = document.getElementsByClassName("country")
const phoneNumber = document.getElementsByClassName("phone")
const submit = document.getElementsByClassName("submit")

submit.addEventListener("click", () =>{
 // if(Name.value || email.value || password.value || cPassword.value || phoneNumber.value == ""){
 //  alert("nawa o")
 // }
 alert(Name.value)
})