/* eslint-disable react/prop-types */
import './pokemonCard.css'

export function PokemonCard ({ pokemon }) {
  return (
    <div className="pokemonCard">
      { pokemon &&
        <>
          <img src={pokemon.image} alt="" />
          <span>{pokemon.name}</span>
        </>
      }
    </div>
  )
}
