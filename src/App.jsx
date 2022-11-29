import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import BarChartStats from './components/BarChartStats';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//components
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Nav from './components/Nav';
// import Featured_Players from './components/Featured_Players';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import Register from './components/Register';
import Stats from './components/Stats';
import { PlayerData } from './Data'

toast.configure();

function App() {

  const [isAuthenicated, setIsAuthenicated] = useState(false);

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

      parseRes === true ? setIsAuthenicated(true):setIsAuthenicated(false);

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth()
  })

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
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/login" render={props => !isAuthenicated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/watchlist" />} />
            <Route exact path="/register" render={props => !isAuthenicated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
            <Route exact path="/watchlist" render={props => isAuthenicated ? <Watchlist {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
          </Switch>
        </div>
      </Router>
      <div className="App">
        <Nav />
        <Hero />
        <News />
        <Stats />
        <BarChartStats chartData={userData} />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
