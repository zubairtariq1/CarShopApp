import React, { Component } from 'react';
import './App.css';
import Carlist from './components/CarList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Car Shop</h2>
        </header>
        <Carlist />
      </div>
    );
  }
}

export default App;