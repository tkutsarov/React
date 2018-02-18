import React, { Component } from 'react';
import SimpleValidation from 'react-simple-validation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let validations = [
      { name: "test", condition: "i > 10", message: "Has to be greater than 5"},
      { name: "test2", condition: "i > 10", message: "Has to be smaller than 10"}
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        This is our Fancy Component: <SimpleValidation type="text" name="first-name" validations={ validations } />
      </div>
    );
  }
}
export default App;
