import React, { Fragment, useState, useEffect } from "react";
import "./styles/watchlist.css";
import "./styles/featured_players_2.css";
import Nav from './Nav';
import Footer from './Footer';
import FeaturedPlayer from './FeaturedPlayer';
import { toast } from "react-toastify";

const Watchlist = ({ isAuthenticated, setAuth, watchlist, setWatchlist, playerStats}) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/watchlist", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const parseRes = await response.json();
      setName(parseRes.user_name)

    } catch (error) {
      console.error(error.message);
    }
  }

  const deleteClick = (playerId, index) => {
    // console.log(playerId, "+++++++++" , index);
    fetch(`http://localhost:5000/watchlist/delete/${playerId}`, {
      method: "DELETE",
      headers: { jwt_token: localStorage.token }
    })
      .then(response => {
        const newWatchlist = [...watchlist]
        newWatchlist.splice(index, 1)
        setWatchlist([...newWatchlist])
      })
      .catch(error => console.log(error.message))
  }

  useEffect(() => {
    if (isAuthenticated) {
      getName();
    }
  }, []);

  return (
    <>
      <Nav setAuth={setAuth} isAuthenticated={isAuthenticated} setWatchlist={setWatchlist} />
      <div class="flex-wrapper">
        <div className="entire-watchlist">
          <h1 className="title">Watchlist: {name}</h1>
          <div className="all-watched-players">
            {watchlist.length && watchlist.map((item, index) => {
              return (
                <FeaturedPlayer playerStats={item} index={index} deleteClick={deleteClick} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
};

export default Watchlist;