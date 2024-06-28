import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: 'white',
    minHeight: '5vh',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  appLogo: {
    position: 'absolute',
    left: '0',
    width: '20%',
    height: 'auto',
    top: '10px',
  },
  headerTitle: {
    fontSize: '1.5rem',
    color: 'rgb(212, 15, 15)',
    textAlign: 'let',
    position: 'absolute',
    left: '7%',
    width: '50%',
    height: 'auto',
    top: '75px',
  },
  logoutSection: {
    position: 'absolute',
    top: '50px',
    right: '20px',
    color: 'black',
  },
  logoutLink: {
    cursor: 'pointer',
    color: 'blue',
    borderTop: '2px solid rgb(215, 27, 49)',
    top: '50px',
  },
});

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles.app)}>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h1 className={css(styles.headerTitle)}>School dashboard</h1>
        </header>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            <p>
              Welcome {user.email} (<span className={css(styles.logoutLink)} onClick={logOut}>logout</span>)
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
