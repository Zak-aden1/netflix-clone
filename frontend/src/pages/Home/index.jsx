import React from 'react'
import Featured from '../../components/Featured'
import Navbar from '../../components/Navbar'

import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type="movies"/>
    </div>
  )
}

export default Home