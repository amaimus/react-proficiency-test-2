import { useRef, useState, useMemo } from 'react'
import { searchPokemons } from '../services/pokemons.js'

export function usePokemons ({ search, sort }) {
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

  const sortedPokemons = useMemo(() => {
    console.log('sortedPokemons')
    return sort
      ? [...pokemons].sort((a, b) => a.name.localeCompare(b.name))
      : pokemons
  }, [sort, pokemons])

  return { pokemons: sortedPokemons, isLoading, getPokemons }
}
