let resultOfSearch = []
const searchInpt = document.querySelector("#inpt-search")
const resultsDiv = document.getElementById("search-results")
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"


const searchPokemon1 = async(e) => {
  const search = e.target.value.toLowerCase()

  const apiRequest = await fetch(url)
  const response = await apiRequest.json()
  console.log(response)
  resultOfSearch = response.results.filter((poke) => {
    return poke.name.toLowerCase().includes(search)
  })
  resultsDiv.innerHTML = resultOfSearch.map(poke => {
    return `<div class='result-card' onclick='getPokemonInfo("${poke.url}")' onblur='closeSearch()'>
            <p>${poke.name}</p>
            </div>`
  }).join('')
  resultsDiv.className = "visible"
}

searchInpt.addEventListener('keyup', searchPokemon1) 

const closeSearch = () => {
  resultsDiv.innerHTML = ""
  searchInpt.value = ""
  resultsDiv2.innerHTML = ""
  searchInpt2.value = ""
}


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

  moves1.textContent = info.moves[0].move.name
  moves2.textContent = info.moves[1].move.name
  moves3.textContent = info.moves[2].move.name
  moves4.textContent = info.moves[3].move.name
}

// CARD 2

let resultOfSearch2 = []
const searchInpt2 = document.querySelector("#inpt-search2")
const resultsDiv2 = document.getElementById("search-results2")
const url2 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"

const searchPokemon2 = async(e) => {
  const search = e.target.value.toLowerCase()

  const apiRequest = await fetch(url2)
  const response = await apiRequest.json()
  console.log(response)
  resultOfSearch2 = response.results.filter((poke) => {
    return poke.name.toLowerCase().includes(search)
  })
  resultsDiv2.innerHTML = resultOfSearch2.map(poke => {
    return `<div class='result-card' onclick='getPokemonInfo2("${poke.url}")' onblur='closeSearch()'>
            <p>${poke.name}</p>
            </div>`
  }).join('')
  resultsDiv2.className = "visible"
}

searchInpt2.addEventListener('keyup', searchPokemon2) 


const getPokemonInfo2 = async(url) => {
  const imgPoke = document.querySelector("#profile-photo2")
  const nomePoke = document.querySelector("#poke-title2")
  const idPoke = document.querySelector("#idPoke2")
  const hPoke = document.querySelector("#hPoke2")
  const wPoke = document.querySelector("#wPoke2")
  const type1 = document.querySelector("#type1-2")
  const type1Card = document.querySelector("#type-card1-2")
  const type2 = document.querySelector("#type2-2")
  const type2Card = document.querySelector("#type-card2-2")
  const moves1 = document.querySelector("#moves1-2")
  const moves2 = document.querySelector("#moves2-2")
  const moves3 = document.querySelector("#moves3-2")
  const moves4 = document.querySelector("#moves4-2")


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
  moves1.textContent = info.moves[0].move.name
  moves2.textContent = info.moves[1].move.name
  moves3.textContent = info.moves[2].move.name
  moves4.textContent = info.moves[3].move.name
}
