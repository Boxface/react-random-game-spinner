import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What do you want to play?</h1>
        </header>
        <div className="Spinner-body">
          <div className="Spinner-wheel">
            <div className = "Spinner-outer-segment g1" id="game-1">
              <div className = "Spinner-inner-segment">Rainbow Six Siege</div>
            </div>
            <div className = "Spinner-outer-segment g2" id="game-2">
              <div className = "Spinner-inner-segment">Rocket League</div>
            </div>
            <div className = "Spinner-outer-segment g3" id="game-3">
              <div className = "Spinner-inner-segment">Jackbox.tv</div>
            </div>
            <div className = "Spinner-outer-segment g4" id="game-4">
              <div className = "Spinner-inner-segment">Golf With Your Friends</div>
            </div>
            <div className = "Spinner-dial" id="Spinner-dial">
            Spin
            </div>
          </div>
          <div className="Spinner-button">
            <button>Click me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
