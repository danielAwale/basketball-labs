import React from "react";
import "./styles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faCalculator, faBinoculars, faUserPlus } from "@fortawesome/free-solid-svg-icons";


export default function Nav(props) {
  return (
    <nav className="nav">
      <img className="image" href="/" alt="baketball logo" src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png" />
      <div className="nav-buttons">
        <div>Basketball Labs</div>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faChartColumn} />
          <a className="individual-nav-button" id="first-nav-button" href="/graphs">Graphs</a>
        </span>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faCalculator} />
          <a className="individual-nav-button" href="/stats">Stats</a>
        </span>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faBinoculars} />
          <a className="individual-nav-button" href="/watchlist">Watchlist</a>
        </span>
        <span className="icon-and-button">
          <FontAwesomeIcon className="icon" icon={faUserPlus} />
          <a className="individual-nav-button" id="last-nav-button" href="/register">Register</a>
        </span>
      </div>
    </nav>
  )
};