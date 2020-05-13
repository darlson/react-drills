import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: ['Sneasel', 'Scyther', 'Wigglytuff', 'Ludicolo', 'Nidoking']
    }
  }
  

  render() {
    let listPokemon = this.state.pokemon.map((e, i) => <h2 key={i}>{e}</h2>)
    return (
      <div className="App">
          {listPokemon}    
      </div>
    );
  }
  
}

export default App;
