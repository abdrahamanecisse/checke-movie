import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../Data'
import { Button } from 'react-bootstrap'

const Description = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [movie, setMovie] =useState({})
    
    useEffect(() => {
        const foundMovie = moviesData.find((movie) => movie.id === Number(id))
        setMovie(foundMovie)
    }, [id])
    
  return (
    <div className='cintainer'>
        <h1 className='text-center'>Movie Description</h1>
        <h3>{movie.description}</h3>
        <Button onClick={() => navigate(-1)} variant='outline-dark'>Back</Button>
    </div>
  )
}

export default Description