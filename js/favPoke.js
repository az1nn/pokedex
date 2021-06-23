let LSfavPokes = JSON.parse(localStorage.getItem("favs"))
let namePoke = document.querySelector("#poke-title")

console.log(LSfavPokes)

const favAdd = () => {
  if(!Array.isArray(LSfavPokes)){
    LSfavPokes = []
  }
  if(!LSfavPokes.includes(namePoke.textContent)){
    LSfavPokes.push(namePoke.textContent) 
    localStorage.setItem("favs", JSON.stringify(LSfavPokes))
    console.log(LSfavPokes) 
  } 
}
