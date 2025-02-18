import React, { use, useState } from 'react'
import NavBar from './compenents/NavBar'
import MovieList from './compenents/MovieList'
import { moviesData } from './Data'
import AddMovie from './compenents/AddMovie'
import FilterMovies from './compenents/FilterMovies'
import { Route, Routes } from 'react-router-dom'
import TVshows from './pages/TVshows'
import Description from './pages/Description'
import Trailer from './pages/Trailer'

const App = () => {
   const [movies,setMovies] = useState(moviesData)

   const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies])
   }

   const [filterTitle, setFilterTitle] = useState("")
   const [filterRate,setFilterRate] = useState(0)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="container mt-2 d-flex justify-content-between align-items-center">
                <AddMovie addMovie={addMovie} />
                <FilterMovies
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRate={filterRate}
                  setFilterRate={setFilterRate}
                />
              </div>
              <MovieList
                movies={movies}
                filterTitle={filterTitle}
                filterRate={filterRate}
              />
            </>
          }
        />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/trailer/:id" element={<Trailer />} />
      </Routes>
    </div>
  );
}

export default App