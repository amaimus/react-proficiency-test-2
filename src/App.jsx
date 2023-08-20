import './App.css'

import responsePokemons from './mocks/response-pokemons.json'

const PokemonsList = () => {
  const pokemons = responsePokemons.results

  return (
    pokemons.map((pokemon, index) => <p key={index}>{pokemon.name}</p>)
  )
}

function App () {
  return (
    <>
      <div className='page'>
        <header>
          <h1>Pokemon finder 🔍</h1>
          <form className='form'>
            <input placeholder='Eevee, bulbasaur...' type='text' />
            <button type='submit'>Search</button>
          </form>
        </header>
        <main>
          {<PokemonsList />}
        </main>
      </div>
    </>
  )
}

export default App
