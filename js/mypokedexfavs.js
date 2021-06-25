let LSPoke = localStorage.getItem("favs")
const divPokes = document.querySelector("#all-pokemons")
console.log(JSON.parse(LSPoke))
const url1 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"

const removeFav = (name) => {
  const lsparse = JSON.parse(LSPoke)

  lsparse.splice(lsparse.indexOf(name), 1)

  localStorage.setItem("favs", JSON.stringify(lsparse))

  location.reload()
}

const apiRequestFav = async() => {
  const request = await fetch(url1)
  const response = await request.json()

  const allFavs = response.results.filter(poke => {
    return LSPoke.includes(poke.name)
  })

  divPokes.innerHTML = allFavs.map(poke => {
    return `<div class='container-pokemon'>
            <p>${poke.name}</p>
            <img src="../assets/img/pokedex/close icon.png" alt=""onclick='removeFav("${poke.name}")'>
            </div>`
  }).join('')
  
}

apiRequestFav()