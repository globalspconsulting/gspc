import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Global SP Consulting
          </p>
          <p>Connecting education to technology </p>
          <p> Site under construction </p>
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        </header>
        <footer>
          Copyrights @Global SP Consulting
        </footer>
      </div>
    );
  }
}

export default App;
