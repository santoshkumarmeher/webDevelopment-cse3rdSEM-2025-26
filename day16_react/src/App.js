import logo from './logo.svg';
import './App.css';

// This is the main component of the app.
// In React, a component is a JavaScript function that returns HTML-like code called JSX.
function App() {
  return (
    <div className="App">
      {/* This is the main wrapper for the whole page. */}
      <header className="App-header">
        {/* The logo is imported from the file './logo.svg' and displayed here. */}
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          {/* This paragraph is showing a message to the user. */}
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* This link takes the user to the React website. */}
          Learn React
        </a>
      </header>
    </div>
  );
}

// Exporting the component makes it available to be used in the app.
export default App;
