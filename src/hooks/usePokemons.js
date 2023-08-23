import { useState } from 'react'
import { searchPokemons } from '../services/pokemons.js'

export function usePokemons ({ search }) {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = () => {
    searchPokemons({ search })
      .then(newPokemons => setPokemons(newPokemons))
  }

  return { pokemons, getPokemons }
}
