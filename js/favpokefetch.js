const favPoke = document.querySelector("#pokefav")
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"
const LSfav = localStorage.getItem("pokefav")
const inptfav = document.querySelector("#inpt-favpoke")

const nameFav = () => {
  inptfav.value = LSfav
}

nameFav()

const favPokemon = async() => {
  

  const apiRequest = await fetch(url)
  const response = await apiRequest.json()
  
  console.log(LSfav)

  allFavs = response.results.filter((poke) => {
    return poke.name.includes(LSfav)
  })

  const apiRequest2 = await fetch(allFavs[0].url)
  const response2 = await apiRequest2.json()
  
  favPoke.src = response2.sprites.other.dream_world.front_default
}

favPokemon()

function changeFav() {
  if(inptfav.disabled == true){
    inptfav.disabled = false
    localStorage.setItem("pokefav", inptfav.value)
  } else if(inptfav.disabled == false) {
    inptfav.disabled = "true"
    localStorage.setItem("pokefav", inptfav.value) 
  }
}
