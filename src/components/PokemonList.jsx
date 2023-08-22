/* eslint-disable react/prop-types */
import { PokemonCard } from './PokemonCard.jsx'

export function PokemonsList ({ pokemons }) {
  const hasPokemons = pokemons?.length > 0

  if (!hasPokemons) return <h4> We couldnt find pokemons</h4>

  return (
    <ul className='pokemons-list'>
      {pokemons.map((pokemon) =>
        <PokemonCard pokemon={pokemon} key={pokemon.id}/>
      )}
    </ul>
  )
}
