import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    borderTop: '2px solid rgb(215, 27, 49)',
    marginTop: '15%',
    marginRight: '80px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  formGroup: {
    marginBottom: '20px',
    '@media (min-width: 900px)': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
      marginBottom: '0',
    },
  },
  label: {
    marginRight: '10px',
    '@media (max-width: 900px)': {
      marginBottom: '5px',
    },
  },
  input: {
    padding: '5px',
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      marginBottom: '0',
    },
  },
  button: {
    padding: '10px',
    backgroundColor: '#f2f4f6',
    color: 'rgb(3, 3, 3)',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '7px',
    '@media (min-width: 900px)': {
      marginLeft: '20px',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div className={css(styles.formGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email: </label>
          <input type="email" id="email" className={css(styles.input)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label htmlFor="pass" className={css(styles.label)}>Password: </label>
          <input type="password" id="pass" className={css(styles.input)} />
        </div>
        <button type="button" className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

export default Login;
