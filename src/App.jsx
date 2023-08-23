import './App.css'
import { useState } from 'react'
import { PokemonList } from './components/PokemonList'
import { usePokemons } from './hooks/usePokemons'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch('')
  const { pokemons, isLoading, getPokemons } = usePokemons({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getPokemons({ search })
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(previousSort => !previousSort)
  }
  return (
    <>
      <div>
        <header>
          <h1>Pokemon finder 🔍</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='query'>Pokemon name</label>
            <input
              onChange={handleChange}
              value={search}
              name='query'
              placeholder='Picachu, Bulbasaur...'
              type='text'
            />
            <input type='checkbox' onChange={handleSort} checked={sort}/>
            <button type='submit'>Search</button>
          </form>
          {
            error && <div>
              <p>{error}</p>
            </div>
          }
        </header>
        <main>
          {
            isLoading ? <p>Loading...</p> : <PokemonList pokemons={pokemons}/>
          }
        </main>
      </div>
    </>
  )
}

export default App
