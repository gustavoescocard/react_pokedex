import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './api';
import { FavoriteProvider } from './context/favoritesContext';

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil((data.count / itensPerPage)))
    } catch (error) {
      console.log("fetchPokemons error ", error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)

    if(favoriteIndex >= 0) {
      updatedFavorites.slice(favoriteIndex, 1)
    } else {
      updatedFavorites.push(name)
    }
    setFavorites(updatedFavorites)
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <>

        <Navbar />
        <Searchbar />

        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages} />
      </>
    </FavoriteProvider>
  );
}

export default App
