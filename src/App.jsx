import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import BarChartStats from './components/BarChartStats';


//components
import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
import News from './components/News';
import Nav from './components/Nav';
import FeaturedPlayers from './components/FeaturedPlayers';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import Register from './components/Register';
import Stats from './components/Stats';
import { PlayerData } from './Data'
import Error from "./components/Error";
function App() {

  const [isAuthenicated, setIsAuthenicated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenicated(boolean);
  };

  const [userData, setUserData] = useState({
    labels: PlayerData.map(item => item.first_name),
    datasets: [
      {
        label: 'Player Points',
        data: PlayerData.map(item => item.points)
      },
      {
        label: 'Player Assists',
        data: PlayerData.map(item => item.assists)
      },
      {
        label: 'Player Rebounds',
        data: PlayerData.map(item => item.rebounds)
      }
    ]
  })

  return (
    <>
     <div className='App'>
     <Router>
      <Nav />
      <FeaturedPlayers />
      {/* <Hero /> */}
        <div className="container">
            <Switch>
            <Route exact path="/login" render={props => !isAuthenicated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/watchlist" />} />
            <Route exact path="/register" render={props => !isAuthenicated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
            <Route exact path="/watchlist" render={props => isAuthenicated ? <Watchlist {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
            <Route path="/stats"><Stats /></Route>
            <Route path = "/graphs"><BarChartStats chartData={userData} /></Route>
            {/* <Route path='*'><Error /></Route> */}
          </Switch>
        </div>
        <News />
        <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
