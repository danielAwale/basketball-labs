import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from "react-router-dom";

import React, { Fragment, useState, useEffect, Dimensions } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Stats from "./components/Stats";
import Register from "./components/Register";
import Watchlist from "./components/Watchlist";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import FeaturedPlayer from "./components/FeaturedPlayer";
import {PlayerData} from "./Data"
import BarChartStats from "./components/BarChartStats";
import News from "./components/News";
import BarChart from "./components/BarChart";
import Error from "./components/Error";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Featured_Players_2 from "./components/Featured_Players_2";
import FilterByPoints from "./components/FilterByPoints";
import './App.css';

toast.configure();

function App() {
  const [isAuthenicated, setIsAuthenicated] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [userId, setUserId] = useState(1);

  const setAuth = (boolean) => {
    setIsAuthenicated(boolean);
  };
  
  async function isAuth() {
    try {

      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenicated(true) : setIsAuthenicated(false);

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth()
  })

  const fetchWatchlist = () => {
    fetch("http://localhost:5000/watchlist/1", {
      method: "POST",
      headers: { jwt_token: localStorage.token }
    })
    .then(response => response.json())
    .then(data => setWatchlist(data))
    .catch(error => console.log(error.message))
  }
 
  useEffect(() => {
    fetchWatchlist()
  }, []);
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home userId={userId}/>} />
          <Route path="/stats" element={<Stats userId={userId} watchlist={watchlist} fetchWatchlist={fetchWatchlist}/>} />
          <Route path="/graphs" element={<BarChart userId={userId}/>} />
          <Route path="/register" element={<Register setAuth={setAuth} userId={userId}/>} />
          <Route path="/login" element={<Login setAuth={setAuth} userId={userId}/>} />
          <Route path="/watchlist" element={<Watchlist setAuth={setAuth} isAuthenticated={isAuthenicated} userId={userId} watchlist={watchlist} fetchWatchlist={fetchWatchlist}/> } />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
