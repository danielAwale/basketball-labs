import React, { Fragment , useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import BarChartStats from './components/BarChartStats';


//components
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import Register from './components/Register';
import Stats from './components/Stats';
import {PlayerData} from './Data'

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
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/login" render={props => !isAuthenicated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/>} />
            <Route exact path="/register" render={props => !isAuthenicated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login"/>} />
            <Route exact path="/dashboard" render={props => isAuthenicated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to ="/login" />} />
          </Switch>
        </div>
      </Router>
    </Fragment>
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <News />
      <BarChartStats chartData={userData} />
      <Footer />
    </div>
  );
}

export default App;
