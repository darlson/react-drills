import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor () {
    super()
    this.state = {
      filtered: '',
      classmates: ['Matt', 'Aislinn', 'Lauren', 'Eric', 'Meg', 'LyAnn', 'Shelby', 'Ben D', 'Ben T', 'Nathan', 'Jeff', 'Charlene', 'Amara', 'Murray']
    }
  }
  change(val){
    this.setState({ filtered: val })
  }
  // for (let i=0; i<names.length; i++){
  //   if(names[i].toLowerCase().includes(userInput.toLowerCase())){
  //       filteredNames.push(names[i])

  render (){ 
    let classList = this.state.classmates.filter((e, i) =>{
      return e.includes(this.state.filtered)
      })
      .map((e, i) => <h2 key={i}> {e} </h2>)
    return (
      <div className="App">
        <input onChange= {e => this.change(e.target.value)} type='text'/>
        {classList}
      </div>
    );
  }
}

export default App;
