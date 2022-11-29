import React, { useState, useEffect } from 'react'
import "./styles/featured_player.css";

const FeaturedPlayers = () => {
  return (
    <div className="all-player-tiles">
      <div tabindex="0" className="focus:outline-none">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 entire-player-tile">
              <div>
                <img alt="person capturing an image" src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" tabindex="0" className="focus:outline-none w-full h-44 player-photo" />
              </div>
              <div className="bg-white player-description-box">
                <div className="flex items-center justify-between px-4 pt-4">
                  <a href="/watchlist">
                    <svg xmlns="http://www.w3.org/2000/svg" method="POST" action="/watchlist" tabindex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 tabindex="0" className="focus:outline-none text-lg font-semibold">LeBron James</h2>
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 pl-5">Los Angeles Lakers</p>
                  </div>
                  <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">Stats will go here once connected to backend.</p>
                  <div className="flex mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div tabindex="0" className="focus:outline-none">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 entire-player-tile">
              <div>
                <img alt="person capturing an image" src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" tabindex="0" className="focus:outline-none w-full h-44 player-photo" />
              </div>
              <div className="bg-white player-description-box">
                <div className="flex items-center justify-between px-4 pt-4">
                  <a href="/watchlist">
                    <svg xmlns="http://www.w3.org/2000/svg" method="POST" action="/watchlist" tabindex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 tabindex="0" className="focus:outline-none text-lg font-semibold">LeBron James</h2>
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 pl-5">Los Angeles Lakers</p>
                  </div>
                  <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">Stats will go here once connected to backend.</p>
                  <div className="flex mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPlayers