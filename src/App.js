import React from 'react';
// import logo from './logo.svg';
import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href="http://splx.adr.com.ua"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPLX Learn
        </a>
        <table>
          <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Anna</td>
            <td>Levchenko</td>
          </tr>
          </tbody>
        </table>

      </header>
    </div>
  );
}

export default App;
