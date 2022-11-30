import React, { Fragment, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

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



function App() {
  const [isAuthenicated, setIsAuthenicated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenicated(boolean);
  };

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stats",
      element: <Stats />
    },
    {
      path: "/graphs",
      element: <BarChart />
    }, 
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/watchlist",
      element: <Watchlist />
    }, 
    {
      path: "*",
      element: <Error />
    }
  ]);
  // return (
  //   <>
  //   <Router>
  //     {/* <Nav />
  //       <Hero /> */}
  //         {/* <Switch>
  //           <Route path="/"><Home /></Route>
  //           <Route path="/login" render={props => !isAuthenicated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/watchlist" />} />
  //           <Route path="/register" render={props => !isAuthenicated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
  //           <Route path="/watchlist" render={props => isAuthenicated ? <Watchlist {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
  //           <Route path="/stats"><Stats /></Route>
  //           <Route path="/graphs"><BarChartStats chartData={userData}/></Route>
  //         </Switch> */}
  //         {/* <News />
  //         <Footer /> */}
  //         </Router>
        
  //   </>
  // );

  return (
    <RouterProvider router={router} />
  )
}

export default App;
