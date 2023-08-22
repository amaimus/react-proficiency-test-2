/* eslint-disable react/prop-types */
import './pokemonCard.css'

export function PokemonCard ({ pokemon }) {
  return (
    <>
      { pokemon &&
        <li className='pokemon-card'>
          <img src={pokemon.image} alt='' />
          <h4>{pokemon.name}</h4>
          <span>height: {pokemon.height}</span>
        </li>
      }
    </>
  )
}
