import { useRef, useState } from 'react'
import { searchPokemons } from '../services/pokemons.js'

export function usePokemons ({ search }) {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const previousSearch = useRef(search)

  const getPokemons = () => {
    if (previousSearch.current === search) return
    previousSearch.current = search

    setIsLoading(true)
    searchPokemons({ search })
      .then(newPokemons => setPokemons(newPokemons))
      .finally(() => setIsLoading(false))
  }

  return { pokemons, isLoading, getPokemons }
}
