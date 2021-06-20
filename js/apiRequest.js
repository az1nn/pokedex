const fetchPokemon = async() => {
  const mainDiv = document.getElementById("all-pokemons")
  const url = "https://pokeapi.co/api/v2/pokemon/"
  
  const apiRequest = await fetch(url)
  const response = await apiRequest.json()
  console.log(response)
  mainDiv.innerHTML = response.results.map(poke => {
    return `<div class='container-pokemon' onclick="getPokemonInfo(${poke.url})">
            <p>${poke.name}</p>
            </div>` 
  }) 
}

fetchPokemon()

const getPokemonInfo = async(url) => {
  console.log(url)
}