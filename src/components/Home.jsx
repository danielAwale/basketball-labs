import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import News from './News'
import "./styles/home.css"
import Featured_Players_2 from './Featured_Players_2'

const Home = ({ setAuth, isAuthenticated }) => {
  return (
    <>
      <Nav setAuth={setAuth} isAuthenticated={isAuthenticated} />
      <div class="flex-wrapper">
        <div>
          <Featured_Players_2 />
        </div>
        {/* <div><News /></div> */}
        <div class="footer"><Footer /></div>
      </div>
    </>
  )
}

export default Home