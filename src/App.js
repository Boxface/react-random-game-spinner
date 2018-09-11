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
          <div className="Spinner-outer-wheel">
            <div className="Spinner-inner-wheel" id="spinnerWheel">
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
            </div>
            <div className = "Spinner-dial" id="Spinner-dial"><p>Spin</p></div>
          </div>
        </div>
        <div className="Spinner-button">
        <button onClick={spin}>Click me</button>
        </div>
      </div>
    );
    function spin() {
      var totalDegrees = 2880;
      var spinDegrees = totalDegrees + (Math.random()*totalDegrees);
      console.log(spinDegrees);

      var wheel = document.getElementById('Spinner-dial');
      wheel.style.transform = 'rotate(' + spinDegrees + 'deg)';
      console.log('All working ok');
    };
  }
}

export default App;
