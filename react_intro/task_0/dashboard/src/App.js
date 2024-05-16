import './logoholbi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header div con la clase App-header */}
      <header className="App-header">
        {/* Logo de Holberton */}
        <img src="logoholbi.png" alt="" />
        {/* Título h1 con el texto "School dashboard" */}
        <h1>School dashboard</h1>
      </header>

      {/* Body div con la clase App-body */}
      <div className="App-body">
        {/* Párrafo con el texto "Login to access the full dashboard" */}
        <p>Login to access the full dashboard</p>
      </div>

      {/* Footer div con la clase App-footer */}
      <footer className="App-footer">
        {/* Párrafo con el texto "Copyright 2024 - Holberton School" */}
        <p>Copyright 2024 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
