import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundcolor: 'white',
    minheight: '5vh',
    display: 'flex',
    flexdirection: 'row-reverse',
    alignitems: 'center',
    justifycontent: 'center',
    fontsize: 'calc(10px + 2vmin)',
  },
  appLogo: {
    position: 'relative',
    position: 'absolute',
    left: '0',
    width: '20%',
    height: 'auto',
    top: '10cap',
  },
  Appheaderh1: {
    fontSize: '1.5rem',
    color: 'rgb(212, 15, 15)',
    textalign: 'right',
    position: 'relative',
    position: 'absolute',
    left: '0',
    width: '50%',
    height: 'auto',
    top: '7cap',
  },
});

function Header() {
  return (
    <div className={css(styles.app)}>
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.headerTitle)}>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
