import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Stats = () => {
  const [statsData, setStatsData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:3000") ({
        method: "POST",
        headers: {"Content-Type": "application/json"}
        //body: 
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    fetch('http://localhost:5000/filter')
    .then(response => response.json())
    .then(data => setStatsData(data))
    .catch(error => console.log(error.message))
  },[])

  const playersImage = [
    'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134881.png', 
    'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fheadshots%2Fnba%2Fplayers%2Ffull%2F4066262.png',
    'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396991.png',
    'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png',
    'https://a.espncdn.com/i/headshots/nba/players/full/3468.png',
    'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4240.png',
    'https://a.espncdn.com/i/headshots/nba/players/full/6583.png',
    'https://a.espncdn.com/i/headshots/nba/players/full/1966.png',
    'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2426.png',
    'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134881.png'
  ]

  return (
    <>
    <Nav />
    <Hero />
    <div class="flex flex-col">
    <div className="px-5 bg-gray-100 overflow-auto">
      <div class="py-1 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
        {/* <div className='flex '>
        <div>
          <h1 class="mb-4 text-m font-bold text-gray-900 dark:text-white md:text-3xl lg:text-l pt-2"><span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-orange-500">Offense</span></h1>
        </div>
        <div>
          <h1 class="mb-4 text-m font-bold text-gray-900 dark:text-white md:text-3xl lg:text-l pt-2"><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 from-yellow-500">Defense</span></h1>
        </div> 
        <div>
          <h1 class="mb-4 text-m font-bold text-gray-900 dark:text-white md:text-3xl lg:text-l pt-2"><span class="text-transparent bg-clip-text bg-gradient-to-r to-lime-500 from-lime-500">%</span></h1>
        </div>
        </div> */}
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr className='bg-gray-300'>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left hover:bg-gray-300">
                  Avatars
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Players
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Points
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Assists
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Rebounds
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-4 py-3 text-left">
                  Turnovers
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Steals
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Blocks
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  FGP%
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  FTP%
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  3PM%
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Add to Watchlist
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Add to Watchlist
                </th>
              </tr>
            </thead>
            {statsData.map((item, index) => { return (
            <tbody>
              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img class="w-20 h-16 rounded" src={playersImage[index]} alt="Default avatar" />
                </td>
                <td class="text-4xl text-gray-900 font-extrabold px-6 py-4 whitespace-nowrap">
                  {item.first_name} {item.last_name}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-orange-500">
                  {item.points}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-orange-500">
                  {item.assists}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-orange-500">
                  {item.rebounds}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-yellow-500">
                  {item.turnovers}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-yellow-500">
                  {item.steals}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-yellow-500">
                  {item.blocks}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500">
                  {item.field_goal_percentage}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500">
                  {item.free_throw_percentage}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500">
                  {item.three_points_made}
                </td>
              </tr>
            </tbody>
            )})}
          </table>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default Stats