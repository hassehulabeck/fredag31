import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './counter'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
