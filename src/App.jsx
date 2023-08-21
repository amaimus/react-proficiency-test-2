import './App.css'
import { PokemonsList } from './components/PokemonList'
import { usePokemons } from './hooks/usePokemons'

function App () {
  const { pokemons } = usePokemons()

  return (
    <>
      <div className='page'>
        <header>
          <h1>Pokemon finder 🔍</h1>
          <form className='form'>
            <label htmlFor="query">Pokemon name</label>
            <input name="query" placeholder='Picachu, Bulbasaur...' type='text' />
            <button type='submit'>Search</button>
          </form>
        </header>
        <main>
          <PokemonsList pokemons={pokemons}/>
        </main>
      </div>
    </>
  )
}

export default App
