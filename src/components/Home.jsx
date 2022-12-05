import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import News from './News'
import "./styles/home.css"

const Home = () => {
  return (
    <>
    <Nav />
    <div class="flex-wrapper">
      <Hero />
    <div><News /></div>
    <div class="footer"><Footer /></div>
    </div>
    </>
  )
}

export default Home