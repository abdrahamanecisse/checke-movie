import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
   
  return (
    <div className='container d-flex flex-wrap justify-content-center gap-5 mt-2'>
        {movies.map((movie) => <MovieCard  movie = {movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList