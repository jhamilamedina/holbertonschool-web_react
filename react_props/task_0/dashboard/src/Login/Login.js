import React from 'react';
import './Login.css';

function Login() {
  return (
      <div className="App-body">
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