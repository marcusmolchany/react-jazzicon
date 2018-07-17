import React, { Component } from 'react';

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    address: '0x1111111111111111111111111111111111111111',
  };

  onChange = ({ target: { value: address } }) => {
    this.setState(() => ({
      address,
    }));
  }

  render() {
    console.log('this.state.address', this.state.address);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-jazzicon</h2>
        </div>
        <p className="App-intro">
          <Jazzicon diameter={100} seed={jsNumberForAddress(this.state.address)} />
        </p>
        <p>
          <input type="text" onChange={this.onChange} placeholder="Type stuff here..." />
        </p>
      </div>
    );
  }
}

export default App;
