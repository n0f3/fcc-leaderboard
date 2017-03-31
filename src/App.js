import React, { Component } from 'react';
import './App.css';
import Leaderboard from './Leaderboard';

class App extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center" >
          <h1>FreeCodeCamp Browny Points Leaderboard</h1>
        </div>
        <Leaderboard/>
        </div>
    );
  }
}

export default App;
