import { useState, useEffect } from 'react';
import './App.css';
import BarChartStats from './components/BarChartStats';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Stats from './components/Stats';
import {PlayerData} from './Data'

function App() {

const [userData, setUserData] = useState({
  labels: PlayerData.map(item => item.first_name),
  datasets: [
    {
      label: 'Player Points',
      data: PlayerData.map(item => item.points)
    },
    {
      label: 'Player Assists',
      data: PlayerData.map(item => item.assists)
    },
    {
      label: 'Player Rebounds',
      data: PlayerData.map(item => item.rebounds)
    }
  ]
})


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <News />
      <BarChartStats chartData={userData} />
      <Footer />
    </div>
  );
}

export default App;
