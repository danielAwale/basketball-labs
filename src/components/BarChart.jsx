import React,{useState} from 'react'
import BarChartStats from './BarChartStats'
import { PlayerData } from '../Data'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'

const BarChart = () => {
  const [offensiveData, setOffensiveData] = useState({
    labels: PlayerData.map(item => item.first_name),
    datasets: [
      {
        label: 'Player Points',
        data: PlayerData.map(item => item.points),
        borderColor: '#36A2EB',
        backgroundColor: 'purple',
      },
      {
        label: 'Player Assists',
        data: PlayerData.map(item => item.assists),
        borderColor: '#36A2EB',
        backgroundColor: 'red',
      },
      {
        label: 'Player Rebounds',
        data: PlayerData.map(item => item.three_points_made),
        borderColor: '#36A2EB',
        backgroundColor: 'gold',
      }
    ],
  })

  const [defensiveData, setDefensiveData] = useState({
    labels: PlayerData.map(item => item.first_name),
    datasets: [
      {
        label: 'Player Rebounds',
        data: PlayerData.map(item => item.rebounds),
        borderColor: '#36A2EB',
        backgroundColor: 'blue',
      },
      {
        label: 'Player Blocks',
        data: PlayerData.map(item => item.blocks),
        borderColor: '#36A2EB',
        backgroundColor: 'yellow',
      },
      {
        label: 'Player Steals',
        data: PlayerData.map(item => item.steals),
        borderColor: '#36A1EB',
        backgroundColor: 'orange',
      }
    ],
  })

  return (
    <>
    <Nav/>
    <Hero />
    <div className='flex justify-evenly'>
    <div className="px-5 overflow-auto">
    <div class="py-1 min-w-full inline-block sm:px-6 lg:px-8">
    <div class="overflow-hidden">
    <div>
      <h1 class="mb-4 text-m font-bold text-gray-900 dark:text-white md:text-5xl lg:text-l pt-2"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Offense Stats</span></h1>
      <BarChartStats chartData={offensiveData} />
    </div>
    <div>
      <h1 class="mb-4 text-m font-bold text-gray-900 dark:text-white md:text-5xl lg:text-l pt-2"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Defense Stats</span></h1>
      <BarChartStats chartData={defensiveData} />
    </div>
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default BarChart