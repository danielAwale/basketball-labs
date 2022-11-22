import React from "react";
import "../styles/nav.scss";

export default function Nav(props) {
  return (
    <nav className="nav">
      <img className="image" href="/" src="https://www.pngplay.com/wp-content/uploads/6/Basketball-Logo-Background-PNG-Image.png"/>
      <div className="nav-buttons">
        <a href="/graphs">Graph Stats</a>
        <a href="/stats">Player Stats</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/register">User Login</a>
      </div>
    </nav>
  )
};