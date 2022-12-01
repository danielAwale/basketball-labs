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

  return (
    <div class="flex flex-col">
    <div>
      <div class="py-1 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Picture
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Player
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Points
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Assists
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Rebounds
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-3 text-left">
                  Turnovers
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Steals
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Blocks
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  FGP%
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  FTP%
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  3PM%
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Add to Watchlist
                </th>
              </tr>
            </thead>
            {statsData.map(item => { return (
            <tbody>
              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <img src={item.picture} />
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <a href="/player">{item.first_name} {item.last_name}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <a href="/points">{item.points}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <a href="/assists">{item.assists}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/rebounds">{item.rebounds}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/turnovers">{item.turnovers}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/steals">{item.steals}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/blocks">{item.blocks}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/fgp">{item.field_goal_percentage}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/ftp">{item.free_throw_percentage}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="/tpm">{item.three_points_made}</a>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button class="btn btn-success" onClick={handleClick}>Add Player</button>
                </td>
              </tr>
            </tbody>
            )})}
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Stats