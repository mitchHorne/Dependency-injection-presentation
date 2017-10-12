import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Make a database call</h1>
        <button>
          HTTP GET
        </button>
        <button>
          HTTP POST
        </button>
      </div>
    );
  }
}

export default App;
