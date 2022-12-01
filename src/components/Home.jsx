import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import News from './News'


const Home = () => {
  return (
    <>
    <div class="flex flex-col h-screen justify-between">
    <Nav/>
   <main>
    <Hero />
    <News />
   </main>
  <footer><Footer /></footer>
  </div> 
    </>
  )
}

export default Home