import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect,Link, NavLink } from "react-router-dom";
import "./styles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faCalculator, faBinoculars, faUserPlus } from "@fortawesome/free-solid-svg-icons";


export default function Nav(props) {
  return (
    <nav className="nav">
      <NavLink to ="/"><img className="image" alt="baketball logo" src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png" /></NavLink>
      <div className="nav-buttons">
        <div>Basketball Labs</div>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faChartColumn} />
          <NavLink to="/graphs" className="individual-nav-button" id="first-nav-button">Graphs</NavLink>
        </span>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faCalculator} />
          <NavLink to="/stats" className="individual-nav-button">Stats</NavLink>
        </span>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faBinoculars} />
          <NavLink to="/watchlist" className="individual-nav-button">Watchlist</NavLink>
        </span>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faUserPlus} />
          <NavLink to="register" className="individual-nav-button" id="last-nav-button">Register</NavLink>
        </span>
      </div>
    </nav>
  )
};