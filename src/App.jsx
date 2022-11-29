import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Stats from "./components/Stats";
import Register from "./components/Register";
import Watchlist from "./components/Watchlist";

function App() {
  const [isAuthenicated, setIsAuthenicated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenicated(boolean);
  };
  return (
    <>
     <Router>
            <Switch>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" render={props => !isAuthenicated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/watchlist" />} />
            <Route exact path="/register" render={props => !isAuthenicated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
            <Route exact path="/watchlist" render={props => isAuthenicated ? <Watchlist {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
            <Route path="/stats" element={<Stats />} />
          </Switch>
    </Router>
    </>
  );
}

export default App;
