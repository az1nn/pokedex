let inptName = document.querySelector("#inpt-name")
let inptAge = document.querySelector("#inpt-age")
let inptLvl = document.querySelector("#level")
let regName = localStorage.getItem("name")
let regAge = localStorage.getItem("age")
let regLvl = localStorage.getItem("lvl")
let regPokeFav = localStorage.getItem("pokefav")
let pokeFav = document.querySelector("#pokefav-name")

function dataInfo() {
  inptName.value = regName
  document.querySelector("#inpt-age").value = regAge
  inptLvl.value = regLvl
  pokeFav.textContent = regPokeFav
}

dataInfo()

function editInfoName() {
  if(inptName.disabled == true){
    inptName.disabled = false
    localStorage.setItem("name", inptName.value)
  } else if(inptName.disabled == false) {
    inptName.disabled = "true"
    localStorage.setItem("name", inptName.value)
  }
}

function editInfoAge() {
  if(inptAge.disabled == true){
    inptAge.disabled = false
    localStorage.setItem("age", inptAge.value)
  } else if(inptAge.disabled == false) {
    inptAge.disabled = "true"
    localStorage.setItem("age", inptAge.value)
  }
}



function editInfoLevel() {
  if(inptLvl.disabled == true){
    inptLvl.disabled = false
    localStorage.setItem("lvl", inptLvl.value)
  } else if(inptLvl.disabled == false) {
    inptLvl.disabled = "true"
    localStorage.setItem("lvl", inptLvl.value)
  }
}

