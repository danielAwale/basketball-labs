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
// import FeaturedPlayers from "./components/FeaturedPlayers";
import {PlayerData} from "./Data"
import BarChartStats from "./components/BarChartStats";
import News from "./components/News";
import BarChart from "./components/BarChart";
import Error from "./components/Error";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Featured_Players_2 from "./components/Featured_Players_2";
import './App.css';

toast.configure();

function App() {
  const [isAuthenicated, setIsAuthenicated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenicated(boolean);
  };

  const doSomething = (component) => {
    if(!isAuthenicated) {
     return <Navigate to="/login"/>
    } 
    return component
  }

  const doSomethingAgain = () => {
    if(!isAuthenicated) {
     return <Navigate to="/login"/>
    } 
    return 
  }

  const doSomethingAnd = () => {
    if(!isAuthenicated) {
     return <Navigate to="/register"/>
    } 
    return <Login />
  }

  
  // return (
  //<>
  // <Router>
  //<Switch>
  // <Route path="/"><Home /></Route>
  // <Route path="/login" render={props => !isAuthenicated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="watchlist" />} />
  // <Route path="/register" render={props => !isAuthenicated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
  //<Route path="/watchlist" render={props => isAuthenicated ? <Watchlist {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
  //<Route path="/stats"><Stats /></Route>
  //<Route path="/graphs"><BarChartStats chartData={userData}/></Route>
  //</Switch> 
  //</Router>
        
  //</>
  // );

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

  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height; 
  // const windowDimensions = {width: windowWidth, height: windowHeight}
  // console.log(windowDimensions);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Featured_Players_2 />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/graphs" element={<BarChart/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/watchlist" element={<Watchlist/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
