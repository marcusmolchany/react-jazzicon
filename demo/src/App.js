import React, { Component } from 'react';

import Jazzicon from 'react-jazzicon';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    seed: Array(40).fill(0),
  };

  onChange = ({ target: { value: seed } }) => {
    this.setState(() => ({
      seed
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-jazzicon</h2>
        </div>
        <p className="App-intro">
          <Jazzicon diameter={100} seed={Math.random(100).toString()} />
        </p>
        <p>
          <input type="text" onChange={this.onChange} placeholder="Type stuff here..." />
        </p>
      </div>
    );
  }
}

export default App;
