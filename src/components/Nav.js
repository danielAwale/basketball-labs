import React from "react";
import "../styles/nav.scss";

export default function Nav(props) {
  return (
    <nav className="nav">
      <img className="image" href="/" alt="baketball logo" src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png"/>
      <div className="nav-buttons">
        <div>Basketball Labs</div>
        <a id="first-nav-button" href="/graphs">Graphs</a>
        <a href="/stats">Stats</a>
        <a href="/watchlist">Watchlist</a>
        <a id="last-nav-button" href="/register">Login</a>
      </div>
    </nav>
  )
};