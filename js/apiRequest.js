let pageNum = 0
let whatPageIs = 1
const page = document.querySelector("#page")

function prevPage() {
  pageNum -= 21
  whatPageIs -= 1
  fetchPokemon()
  page.textContent = `Página ${whatPageIs}`
}
function nextPage() {
  pageNum += 21
  whatPageIs += 1
  fetchPokemon()
  page.textContent = `Página ${whatPageIs}`
}



const fetchPokemon = async() => {
  const mainDiv = document.getElementById("all-pokemons")
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${pageNum}&limit=20`
  
  const apiRequest = await fetch(url)
  const response = await apiRequest.json()
  console.log(response)
  mainDiv.innerHTML = response.results.map(poke => {
    return `<div class='container-pokemon' onclick='getPokemonInfo("${poke.url}")'>
            <p>${poke.name}</p>
            </div>`
  }).join('')
}   

fetchPokemon()

const getPokemonInfo = async(url) => {
  const imgPoke = document.querySelector("#profile-photo")
  const nomePoke = document.querySelector("#poke-title")
  const idPoke = document.querySelector("#idPoke")
  const hPoke = document.querySelector("#hPoke")
  const wPoke = document.querySelector("#wPoke")
  const type1 = document.querySelector("#type1")
  const type1Card = document.querySelector("#type-card1")
  const type2 = document.querySelector("#type2")
  const type2Card = document.querySelector("#type-card2")
  const moves1 = document.querySelector("#moves1")
  const moves2 = document.querySelector("#moves2")
  const moves3 = document.querySelector("#moves3")
  const moves4 = document.querySelector("#moves4")


  const fetchInfo = await fetch(url)
  const info = await fetchInfo.json()
  imgPoke.src = info.sprites.other.dream_world.front_default
  nomePoke.textContent = info.name
  idPoke.textContent = info.id
  hPoke.textContent = info.height
  wPoke.textContent = info.weight
  type1.textContent = info.types[0].type.name
  type1Card.className = `${info.types[0].type.name} type-card`

  if(info.types[1] == undefined) {
    type2.textContent = ""
    type2Card.className = `type-card`
  } else {
      type2.textContent = info.types[1].type.name
      type2Card.className = `${info.types[1].type.name} type-card`
  }
  // criar função se nao tiver 
  moves1.textContent = info.moves[0].move.name
  moves2.textContent = info.moves[1].move.name
  moves3.textContent = info.moves[2].move.name
  moves4.textContent = info.moves[3].move.name
  console.log()
}
