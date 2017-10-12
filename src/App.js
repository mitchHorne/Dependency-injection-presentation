import React, { Component } from 'react';
import './App.css';
import httpRequest from './http-requests';
import { getRequest, postRequest } from './functions';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Make a database call</h1>
        <button onClick={() => getRequest()}>
          HTTP GET
        </button>
        <button onClick={() => postRequest()}>
          HTTP POST
        </button>
      </div>
    );
  }
} =

export default App;
