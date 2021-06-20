// const fetchPokeInfo = () => {
//   let id = "5"
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`

//   fetch(url)
//     .then(response => response.json())
//       .then(function(response) { 
//         var pokePhoto = response.sprites.other.dream_world.front_default})
        
// }

// fetchPokeInfo()
// console.log(pokePhoto)

async function fetchPokeInfo() {
  let id = "5"
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const response = await fetch(url)
  const pokeinfo = await response.json()
  console.log(pokeinfo)
}

fetchPokeInfo()
