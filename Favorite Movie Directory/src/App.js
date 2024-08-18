import React,{useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]); // Initially show all movies
  };
  const searchMovies = (query) => {
    const results = movies.filter(movie => movie.name.toLowerCase().startsWith(query.toLowerCase()));
    setFilteredMovies(results);
  };

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
        <Movieform onAddMovie={addMovie} />
        </div>
        <div className='layout-column w-30'>
        <Search onSearch={searchMovies} />
        <Movieslist movies={filteredMovies} /> 
        </div>
      </div>
    </div>
  )
}

export default App;
