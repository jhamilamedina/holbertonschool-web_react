import './Footer.css';
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';

function Footer() {
  return (
      <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
  );
}

export default Footer;