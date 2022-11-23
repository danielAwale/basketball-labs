import React from "react";
import "../styles/nav.scss";

export default function Nav(props) {
  return (
    <nav className="nav">
      <img className="image" href="/" alt="baketball logo" src="https://www.pngplay.com/wp-content/uploads/6/Basketball-Logo-Background-PNG-Image.png"/>
      <div className="nav-buttons">
        <div>Basketball Labs</div>
        <a href="/graphs">Graphs</a>
        <a href="/stats">Stats</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/register">Login</a>
      </div>
    </nav>
  )
};