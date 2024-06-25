import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    bordertop: '2px solid rgb(215, 27, 49)',
    margintop: '20%',
    marginright: '80',
  },
  horizontalform: {
    display: 'flex',
    alignitems: 'center', /* Alinea los elementos verticalmente al centro */
  },
  horizontalformdiv: {
    display: 'flex',
    alignitems: 'center',
    marginright: '20px', /* Espacio entre los divs */
  },
  horizontalformlabel: {
    marginright: '10px', /* Espacio entre la etiqueta y el input */
  },
  horizontalforminput: {
    padding: '5px',
  },
  horizontalformbutton: {
    padding: '10px',
    backgroundcolor: '#f2f4f6',
    color: 'rgb(3, 3, 3)',
    border: 'none',
    cursor: 'pointer',
    borderradius: '7px',
  },
  horizontalformbuttonhover: {
    backgroundcolor: '#f2f4f6',
  },
  Appbodyp: {
    margintop: '4%',
    textalign: 'left',
    width: '50%',
  }
});

function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"></input>
        <label htmlFor="pass"> Password: </label>
        <input type="password" id="pass"></input>
        <button type="button">OK</button>
      </form>
    </div>
  );
}

export default Login;
