import './Footer.css';
import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact" id="contact-link">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
