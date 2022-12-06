import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from "react-router-dom";
import "./styles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faCalculator, faBinoculars, faUserPlus, faBars } from "@fortawesome/free-solid-svg-icons";


export default function Nav(props) {

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const getWindowSize = function () {
    return { width: window.innerWidth, height: window.innerHeight }
  }

  // Updates windowSize whenever the screen size is adjusted.
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const largeNavBar = (
    <>
      <NavLink to="/"><img className="image" alt="baketball logo" src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png" /></NavLink>
      <div className="nav-buttons">
        <div className="website-title">Basketball Labs</div>

        <NavLink to="/graphs" className="icon-and-button" id="first-nav-button">
          <FontAwesomeIcon className="icon" icon={faChartColumn} />
          <div className="individual-nav-button">Graphs</div>
        </NavLink>

        <NavLink to="/stats" className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faCalculator} />
          <div className="individual-nav-button">Stats</div>
        </NavLink>

        <NavLink to="/watchlist" className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faBinoculars} />
          <div className="individual-nav-button">Watchlist</div>
        </NavLink>

        <NavLink to="/register" className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faUserPlus} />
          <div className="individual-nav-button">Register</div>
        </NavLink>
      </div>
    </>
  )

  const smallNavBar = (
    <>
      <NavLink to="/"><img className="image" alt="baketball logo" src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png" /></NavLink>
      <div className="website-title small-title">Basketball Labs</div>

      <div class="dropdown">
        <FontAwesomeIcon className="hamburger dropbtn" icon={faBars} />
        <div class="dropdown-content">

          <NavLink to="/graphs" className="single-dropdown-section" id="first-nav-button">
            <FontAwesomeIcon className="dropdown-icon" icon={faChartColumn} />
            <div className="">Graphs</div>
          </NavLink>

          <NavLink to="/stats" className="single-dropdown-section">
            <FontAwesomeIcon className="dropdown-icon" icon={faCalculator} />
            <div className="">Stats</div>
          </NavLink>

          <NavLink to="/watchlist" className="single-dropdown-section">
            <FontAwesomeIcon className="dropdown-icon" icon={faBinoculars} />
            <div className="">Watchlist</div>
          </NavLink>

          <NavLink to="/register" className="single-dropdown-section">
            <FontAwesomeIcon className="dropdown-icon" icon={faUserPlus} />
            <div className="">Register</div>
          </NavLink>
        </div>
      </div>
    </>
  );

  const tinyNavBar = (
    <>
      <NavLink to="/"><img className="image" alt="baketball logo" src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png" /></NavLink>

      <div class="dropdown tiny-dropdown">
        <FontAwesomeIcon className="hamburger dropbtn" icon={faBars} />
        <div class="dropdown-content">

          <NavLink to="/graphs" className="single-dropdown-section" id="first-nav-button">
            <FontAwesomeIcon className="dropdown-icon" icon={faChartColumn} />
            <div className="">Graphs</div>
          </NavLink>

          <NavLink to="/stats" className="single-dropdown-section">
            <FontAwesomeIcon className="dropdown-icon" icon={faCalculator} />
            <div className="">Stats</div>
          </NavLink>

          <NavLink to="/watchlist" className="single-dropdown-section">
            <FontAwesomeIcon className="dropdown-icon" icon={faBinoculars} />
            <div className="">Watchlist</div>
          </NavLink>

          <NavLink to="/register" className="single-dropdown-section">
            <FontAwesomeIcon className="dropdown-icon" icon={faUserPlus} />
            <div className="">Register</div>
          </NavLink>
        </div>
      </div>
    </>
  )

  const navSize = function (windowSize) {
    if (windowSize.width >= 870) {
      const navBar = largeNavBar;
      return navBar;
    } else if (windowSize.width < 870 && windowSize.width > 460) {
      const navBar = smallNavBar;
      return navBar;
    } else if (windowSize.width <= 460 ) {
      const navBar = tinyNavBar;
      return navBar;
    }
  }


  return (
    <nav className="nav">
      {navSize(windowSize)}
    </nav>

  )
};

