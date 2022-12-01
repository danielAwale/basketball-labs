import React, { Fragment, useState, useEffect } from "react";
import "./styles/watchlist.css";
import "./styles/featured_players_2.css";
import { toast } from "react-toastify";

const Watchlist = ({ setAuth }) => {

  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/watchlist/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      console.log(response);
      const parseRes = await response.json();

      setName(parseRes.user_name)

    } catch (error) {
      console.error(error.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Logged Out Successfully!")
  }

  useEffect(() => {
    getName();
  }, []);

  const smapleTile = (
    <div tabindex="0" className="focus:outline-none">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 entire-player-tile">
              <div>
                <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" tabindex="0" className="focus:outline-none w-full h-44 player-photo" />
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
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 pl-5">LA Lakers</p>
                  </div>
                  <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2 featured-stat-info"><br/>Points: 29.3<br/><br/>Assists: 8.7<br/><br/>Rebounds: 4.2%</p>
                  <div className="flex mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

  return (
    <Fragment>
      <div className="entire-watchlist">
        <h1 className="title">Watchlist {name}</h1>
          <div className="all-watched-players">
            {smapleTile}
            {smapleTile}
            {smapleTile}
            {smapleTile}
            {smapleTile}
          </div>
      </div>
    </Fragment>
  );
  // return (
  //   <Fragment>
  //     <h1>Watchlist {name}</h1>
  //     <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
  //   </Fragment>
  // );
};

export default Watchlist;