/* eslint-disable  */
import React from "react";
import './style.css';
 
const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/logo_Netflix.png" alt="Netflixs" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pobs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User" />
        </a>
      </div>
    </header>
  )
}

export default Header;