import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
  
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form class="horizontal-form">
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button">OK</button>
        </form>
      </body>
  );
}

export default App;
