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
  },[setStatsData])

  const filterStats = (stat) => {
    console.log("this is the", stat, statsData)
    const new1 = statsData.sort(function(a, b) {
      return b[stat] - a[stat];
    });

    return setStatsData([...new1])

  }

  const clearFilters = (stat) => {
    const new1 = statsData.sort(function(a, b) {
      return a[stat] - b[stat];
    });

    return setStatsData([...new1])

  }

  return (
    <>
    <Nav />
    <Hero />
    <div class="flex flex-col">
    <div className="px-5 bg-gray-100 overflow-auto">
      <div class="py-1 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
        <div className='flex justify-center'>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("points")}>Points</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("assists")}>Assists</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("rebounds")}>Rebounds</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("turnovers")}>Turovers</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("steals")}>Steals</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("blocks")}>Blocks</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("field_goal_percentage")}>FGP%</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("free_throw_percentage")}>FTP%</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => filterStats("three_points_made")}>3PM%</button>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2" onClick={() => clearFilters("id")}>Clear</button>
        </div>
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
              </tr>
            </thead>
            <tbody>
              {statsData ? statsData.map((item, index) => { return (
              <tr key={`${item.id} ${index}`}  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img class="w-20 h-16 rounded" src={item.picture} alt="Default avatar" />
                </td>
                <td class="text-2xl text-gray-900 font-extrabold px-6 py-4 whitespace-nowrap">
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
               )}) : <div role="status">
               <svg aria-hidden="true" className="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none"      xmlns="http://www.w3.org/2000/svg">
                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
               </svg>
               <span className="sr-only">Loading...</span>
           </div>}
               </tbody>
           
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