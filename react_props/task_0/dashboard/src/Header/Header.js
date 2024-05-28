import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="holberton logo" class="imagen"/>
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
