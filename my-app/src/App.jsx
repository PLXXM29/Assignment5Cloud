import React from 'react';
import './App.css';
import catGif from './assets/cat.gif';  // Import the gif

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <img src={catGif} alt="Cat" className="cat-gif" /> {/* Add the gif */}
        <h1>🚀 Assignment 5</h1>
        <p className="subtitle">
          Firebase Auto Deployment with Jenkins Pipeline
        </p>
        <div className="submitted">
          <p className="label">Submitted by:</p>
          <p>Chanyanat Sodsri — B6508852</p>
          <p>Kamonchanok Thonnondang — B6526405</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
