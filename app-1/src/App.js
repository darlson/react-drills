import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      message: ''
    }
  }
  change(val){
    this.setState({ message: val })
  }

  render (){
    return (
      <div className="App">
        <input onChange={ e => this.change(e.target.value)} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
