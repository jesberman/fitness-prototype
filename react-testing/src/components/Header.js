import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header className="header" style={{backgroundColor: 'red'}}>
    <h1 style={{fontSize: '100px'}}>Welcome</h1>
  </header>
);

export default Header;