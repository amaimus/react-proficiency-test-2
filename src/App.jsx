import './App.css'
import { PokemonList } from './components/PokemonList'
import { usePokemons } from './hooks/usePokemons'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, error } = useSearch('')
  const { pokemons, isLoading, getPokemons } = usePokemons({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getPokemons()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
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
