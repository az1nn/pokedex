let allFavs = []
const favPoke = document.querySelector("#pokefav")
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"

const favPokemon = async() => {
  const LSfavs = localStorage.getItem("favs")
  const apiRequest = await fetch(url)
  const response = await apiRequest.json()
  
  console.log(LSfavs)

  allFavs = response.results.filter((poke) => {
    return poke.name.includes(LSfavs)
  })

  console.log(allFavs)
}

favPokemon()