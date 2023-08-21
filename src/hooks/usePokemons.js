import { pokemonsInfo } from '../mocks/pokemons-info'

export function usePokemons () {
  const pokemons = pokemonsInfo
  const mappedPokemons = pokemons?.map(
    pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites
    })
  )

  return { pokemons: mappedPokemons }
}
