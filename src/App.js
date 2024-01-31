import React from 'react';
import './App.css';
import CoinInfo from './components/CoinInfo'; // Import your CoinInfo component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Information</h1>
      </header>
      <main>
        <CoinInfo />
      </main>
    </div>
  );
}

export default App;

