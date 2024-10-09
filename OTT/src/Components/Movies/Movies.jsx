import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import MovieCarousel from './MovieCarausal'
import Event from '../Home/FileEvent'
import Movie from '../Home/RenderMovie'
import Hindi from '../Home/RenderCharCard'

const Movies = () => {
  return (
    <div>
        <NavBar/>
        <MovieCarousel/>
        <Movie/>
        <Hindi/>
        <Event/>
        <Footer/>
    </div>
  )
}

export default Movies