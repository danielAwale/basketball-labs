import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import News from './News'
import "./styles/home.css"
import Featured_Players_2 from './Featured_Players_2'

const Home = () => {
  return (
    <>
      <Nav />
      <div class="flex-wrapper">
        <Featured_Players_2 />
        {/* <div><News /></div> */}
        <div class="footer"><Footer /></div>
      </div>
    </>
  )
}

export default Home