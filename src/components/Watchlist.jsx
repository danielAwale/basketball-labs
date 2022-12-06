import React, { Fragment, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./styles/watchlist.css";
import "./styles/featured_players_2.css";
import { toast } from "react-toastify";
import Nav from './Nav';
import Footer from './Footer';
import FeaturedPlayer from './FeaturedPlayer';

const Watchlist = ({ isAuthenticated, setAuth, watchlist }) => {

  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/watchlist/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
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

  return (

    <>
      <Nav />
      <div class="flex-wrapper">
      <div className="entire-watchlist">
        <h1 className="title">Watchlist {name}</h1>
          <div className="all-watched-players">
          {watchlist.length && watchlist.map((item) => { return (
            <FeaturedPlayer playerStats={item} />
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