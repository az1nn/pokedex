localStorage.setItem("email", "admin")
localStorage.setItem("pword", "123")

function loginTest() {
  let regEmail = localStorage.getItem("email")
  let email = document.querySelector("#inpt-email")
  let regPword = localStorage.getItem("pword")
  let pword = document.querySelector("#inpt-pword")
  let errmsg = document.querySelector("#error-msg")
  let msg = document.createTextNode("Email e/ou senha errados")

  event.preventDefault();

  if (email.value == regEmail && pword.value == regPword){
    window.location.href = "../random%20page/index.html"
  } else {
    errmsg.style.visibility = "visible"
  }
  
}

var btnEntrar = document.querySelector("#btn-login")

btnEntrar.addEventListener("click", loginTest)

function checkEmail() {
  let email = document.querySelector("#inpt-email")

}