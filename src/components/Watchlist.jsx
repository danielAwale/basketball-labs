import React, { Fragment, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./styles/watchlist.css";
import "./styles/featured_players_2.css";
import { toast } from "react-toastify";
import Nav from './Nav';
import Footer from './Footer';
import FeaturedPlayer from './FeaturedPlayer';

const Watchlist = ({ isAuthenticated, setAuth }) => {

  const [name, setName] = useState("");
  const [watchlist, setWatchlist] = useState([]);

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
    fetch("http://localhost:5000/watchlist/1", {
      method: "POST",
      headers: { jwt_token: localStorage.token }
    })
    .then(response => response.json())
    .then(data => setWatchlist(data))
    .catch(error => console.log(error.message))
  }, []);

  useEffect(() => {
    getName();
  }, []);

  return (

    <Fragment>
      <Nav />
      <div className="entire-watchlist">
        <h1 className="title">Watchlist {name}</h1>
          <div className="all-watched-players">
          {watchlist.length && watchlist.map((item) => { return (
            <FeaturedPlayer playerStats={item} />
          )})}
          </div>
      </div>
      <Footer />
    </Fragment>
  ) };
  // return <Navigate to="/login" />
  // return (
  //   <Fragment>
  //     <h1>Watchlist {name}</h1>
  //     <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
  //   </Fragment>
  // );
// };

export default Watchlist;