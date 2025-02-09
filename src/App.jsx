import React, { use, useState } from 'react'
import NavBar from './compenents/NavBar'
import MovieList from './compenents/MovieList'
import { moviesData } from './Data'
import AddMovie from './compenents/AddMovie'

const App = () => {
   const [movies,setMovies] = useState(moviesData)

   const addMovie =(newMovie) => {
    setMovies([...movies,newMovie])
   }
  return (
    <div>
        <NavBar />
        <AddMovie addMovie={addMovie}/>
        <MovieList movies={movies}/>
    </div>
  )
}

export default App