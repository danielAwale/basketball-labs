import React, { Fragment, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/watchlist.css";
import "./styles/featured_players_2.css";
import { toast } from "react-toastify";
import Nav from './Nav';
import Footer from './Footer';
import FeaturedPlayer from './FeaturedPlayer';
import { NavLink } from "react-router-dom";

const Watchlist = ({ isAuthenticated, setAuth, watchlist, setWatchlist }) => {
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
    console.log(playerId, "+++++++++" , index);
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

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    setWatchlist([]);
    toast.success("Logged Out Successfully!")
    navigate("/");
  }

  useEffect(() => {
    if(isAuthenticated) {
    getName();
    }
  }, []);

  return (
    <>
      <Nav />
      <div class="flex-wrapper">
      <div className="entire-watchlist">
        <h1 className="title">Watchlist {name}</h1>
          <div className="all-watched-players">
          {watchlist.length && watchlist.map((item, index) => { return (
            <FeaturedPlayer playerStats={item} index={index} deleteClick={deleteClick} />
          )})}
          </div>
      </div>
      <button className="btn" onClick={e => logout(e)}>Logout</button>
      </div>
      <div className="footer">
      <Footer />
      </div>
    </>
  ) };

export default Watchlist;