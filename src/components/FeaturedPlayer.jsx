import React, { useState, useEffect } from 'react'
import "./styles/featured_players_2.css";

const FeaturedPlayer = ({playerStats, fetchWatchlist, index, deleteClick }) => {

  // const deleteClick = (e, playerId, userId) => {
  //   console.log(playerId);
  //   fetch(`http://localhost:5000/watchlist/delete/${playerId}`, {
  //       method: "DELETE",
  //       headers: { jwt_token: localStorage.token }
  //   })
  //   .then(response => fetchWatchlist())
  //   .catch(error => console.log(error.message))
  // }
  return (
    <>
    <div tabindex="0" className="focus:outline-none">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 entire-player-tile">
              <div>
                <img src={playerStats.picture} tabindex="0" className="focus:outline-none w-full h-44 player-photo" />
              </div>
              <div className="bg-slate-800 player-description-box">
                <div className="flex items-center justify-between px-4 pt-4">
                  <button class="btn btn-danger" onClick={e => deleteClick(playerStats.id, index)}>Remove Player</button>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 tabindex="0" className="focus:outline-none text-lg font-semibold text-white">{playerStats.first_name} {playerStats.last_name}</h2>
                    <p tabindex="0" className="focus:outline-none text-xs text-slate-400 pl-5">{playerStats.team_name}</p>
                  </div>
                  <p tabindex="0" className="focus:outline-none text-xs text-slate-400 mt-2 featured-stat-info"><br/>Points: {playerStats.points}<br/><br/>Assists: {playerStats.assists}<br/><br/>Rebounds: {playerStats.rebounds}<br/><br/>Steals: {playerStats.steals}<br/><br/>Blocks: {playerStats.blocks}<br/><br/>T/O: {playerStats.turnovers}<br/><br/>FGP: {playerStats.field_goal_percentage}<br/><br/> FTP: {playerStats.free_throw_percentage}<br/><br/>3PM: {playerStats.three_points_made}</p>
                  <div className="flex mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default FeaturedPlayer