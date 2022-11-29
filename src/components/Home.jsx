import React, {useState, useEffect} from 'react'

import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import News from './News'
import Stats from './Stats'
import BarChartStats from './BarChartStats'
import Login from './Login'
import Register from './Register'
import Watchlist from './Watchlist'
import FeaturedPlayers from './FeaturedPlayers'
import { PlayerData } from '../Data'



const Home = () => {
  // const [isAuthenicated, setIsAuthenicated] = useState(false);

  // const setAuth = (boolean) => {
  //   setIsAuthenicated(boolean);
  // };

  // const [userData, setUserData] = useState({
  //   labels: PlayerData.map(item => item.first_name),
  //   datasets: [
  //     {
  //       label: 'Player Points',
  //       data: PlayerData.map(item => item.points)
  //     },
  //     {
  //       label: 'Player Assists',
  //       data: PlayerData.map(item => item.assists)
  //     },
  //     {
  //       label: 'Player Rebounds',
  //       data: PlayerData.map(item => item.rebounds)
  //     }
  //   ]
  // })
  return (
    <>
      <Nav />
      <Hero />
      <News />
      <Footer />
    </>
  )
}

export default Home