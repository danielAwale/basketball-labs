import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';

const Stats = () => {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/filter')
    .then(response => response.json())
    .then(data => setStatsData(data))
    .catch(error => console.log(error.message))
  },[])

  const playersImage = ['https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134881.png', 'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fheadshots%2Fnba%2Fplayers%2Ffull%2F4066262.png','https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396991.png','https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png','https://a.espncdn.com/i/headshots/nba/players/full/3468.png','https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4240.png','https://a.espncdn.com/i/headshots/nba/players/full/6583.png','https://a.espncdn.com/i/headshots/nba/players/full/1966.png','https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2426.png','https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134881.png']

  return (
    <>
    <Nav />
    <Hero />
    <div class="flex flex-col">
    <div>
      <div class="py-1 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Player
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Player
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
              </tr>
            </thead>
            {statsData.map((item, index) => { return (
            <tbody>
              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div class="relative w-16 h-16">
                <img class="rounded-full border border-gray-100 shadow-sm" src={playersImage[index]} alt="" />
                <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full z-2"></div>
               </div>
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.first_name} {item.last_name}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.points}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.assists}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.rebounds}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.turnovers}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.steals}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.blocks}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.field_goal_percentage}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.free_throw_percentage}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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