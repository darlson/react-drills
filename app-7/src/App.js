import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask />
      <List />
    </div>
  );
}

export default App;
