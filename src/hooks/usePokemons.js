import { pokemonsInfo } from '../mocks/pokemons-info'

export function usePokemons () {
  const pokemons = pokemonsInfo
  const mappedPokemons = pokemons?.map(pokemon => {
    const pokemonNameCapitalized =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return {
      id: pokemon.id,
      name: pokemonNameCapitalized,
      height: pokemon.height,
      image: pokemon.sprites
    }
  })

  return { pokemons: mappedPokemons }
}
