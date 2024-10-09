import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import Carausal from '../Movies/MovieCarausal'
import Chennel from './Chennel'

const Live = () => {
  return (
    <div>
        <NavBar/>
        <Chennel/>
        <Carausal/>
        <Footer/>
    </div>
  )
}

export default Live