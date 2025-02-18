import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { moviesData } from "../Data";
import { Button } from 'react-bootstrap';

const Trailer = () => {
   const navigate = useNavigate()
      const {id} = useParams()
      const [movie, setMovie] =useState({})

       useEffect(() => {
              const foundMovie = moviesData.find((movie) => movie.id=== Number(id));
              setMovie(foundMovie)
          }, [id])
  

  return (
    <div className="container">
      <div className='mt-4'>
        <Button onClick={() => navigate(-1)} variant="outline-dark">
          Back
        </Button>
      </div>
      <h1 className="text-center">Watch Trailer</h1>
      <div className="d-flex justify-content-center">
        <iframe
          title="trailer"
          width={650}
          height={350}
          src={movie.trailer}
          frameborde="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer