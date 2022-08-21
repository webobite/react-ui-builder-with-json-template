import React from 'react';
import logo from './logo.svg';
import './App.css';
import { uiJson } from './utils';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>
          {JSON.stringify(uiJson)}
        </p>
      </header>
    </div>
  );
}

export default App;
