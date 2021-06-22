let resultOfSearch = []
const searchInpt = document.querySelector("#inpt-search")
const resultsDiv = document.getElementById("search-results")
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"


const searchPokemon = async(e) => {
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

searchInpt.addEventListener('keyup', searchPokemon) 

const closeSearch = () => {
  resultsDiv.innerHTML = ""
  searchInpt.value = ""
}