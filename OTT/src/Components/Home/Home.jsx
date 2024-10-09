import React from 'react'
import NavBar from '../Nav'
import ShowCase from './Showcase'
import FestivalShowcase from './FestivalShowcase'
import Events from './FileEvent'
import RenderChar from './RenderCharCard'
import RederMovie from './RenderMovie'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
        <NavBar/>
        <ShowCase/>
       <FestivalShowcase/>
       <Events/>
       <RenderChar/>
      <RederMovie/>
      <Footer/>
    </div>
  )
}

export default Home