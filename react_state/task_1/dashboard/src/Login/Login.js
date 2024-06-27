import React, { useState } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    // Verificar si ambos campos no están vacíos para habilitar el botón
    if (event.target.value !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    // Verificar si ambos campos no están vacíos para habilitar el botón
    if (event.target.value !== '' && email !== '') {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  return (
    <div className={css(styles.appBody)}>
      {isLoggedIn ? (
        <p>Usuario autenticado correctamente.</p>
      ) : (
        <>
          <p>Login to access the full dashboard</p>
          <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
            <div className={css(styles.formGroup)}>
              <label htmlFor="email" className={css(styles.label)}>Email: </label>
              <input
                type="email"
                id="email"
                className={css(styles.input)}
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className={css(styles.formGroup)}>
              <label htmlFor="pass" className={css(styles.label)}>Password: </label>
              <input
                type="password"
                id="pass"
                className={css(styles.input)}
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <input
              type="submit"
              value="OK"
              className={css(styles.button)}
              disabled={!enableSubmit} // Deshabilitar cuando enableSubmit es false
            />
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
