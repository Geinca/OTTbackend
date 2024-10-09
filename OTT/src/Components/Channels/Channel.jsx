import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import Channels from './ChannelCard'
import ChannelList from './ChannelList'

const Channel = () => {
  return (
    <div>
        <NavBar/>
        <ChannelList/>
        <Channels/>
        <Footer/>
    </div>
  )
}

export default Channel