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
        <iframe allow="microphone;" width="350" height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/e16f9528-4472-49e1-8a8f-1e912a5f8a94">
        </iframe>
      </div>
    );
  }
}

export default App;