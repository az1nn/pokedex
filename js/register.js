let inptName = document.querySelector("#inpt-name")
let inptEmail = document.querySelector("#inpt-email")
let inptPokefav = document.querySelector("#inpt-poke")
let inptPword = document.querySelector("#inpt-pword")
let btn = document.querySelector("#btn-login")

function register(){
  event.preventDefault()
  
  localStorage.setItem("name", inptName.value)
  localStorage.setItem("email", inptEmail.value)
  localStorage.setItem("pokefav", inptPokefav.value)
  localStorage.setItem("pword", inptPword.value)

  window.location.href = "../random-page/index.html"
}
btn.addEventListener("click", register)