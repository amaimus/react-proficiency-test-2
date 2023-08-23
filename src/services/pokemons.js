import { pokemonsInfo } from '../mocks/pokemons-info'
// The PokeAPI does not provide an endpoint where I can get a list of Pokémon with their names, images, and other information. However, it does provide multiple endpoints that I can fetch in order to retrieve all the information I need. However, doing so could result in me being banned from the API for making too many requests, especially during the development process. So ill use the fakeFetch and a mock, easier, faster and I can practice the same principles or react

function fakeFetch ({ search }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = pokemonsInfo.filter(
        pokemon => pokemon.name.includes(search.toLowerCase())
      )
      resolve(data)
    }, 200)
  })
}

function mapPokemons ({ pokemons }) {
  return pokemons?.map(pokemon => {
    const pokemonNameCapitalized =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return {
      id: pokemon.id,
      name: pokemonNameCapitalized,
      height: pokemon.height,
      image: pokemon.sprites
    }
  })
}

export const searchPokemons = ({ search }) => {
  return fakeFetch({ search })
    .then(pokemons => mapPokemons({ pokemons }))
    .catch((e) => { console.log(e) })
}
