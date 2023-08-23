import { useState } from 'react'
import { searchPokemons } from '../services/pokemons.js'

export function usePokemons ({ search }) {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getPokemons = () => {
    setIsLoading(true)
    searchPokemons({ search })
      .then(newPokemons => setPokemons(newPokemons))
      .finally(() => setIsLoading(false))
  }

  return { pokemons, isLoading, getPokemons }
}
