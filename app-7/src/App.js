import React, {Component} from 'react';
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: []
    }
    this.add = this.add.bind(this)
  }

  add(task) {
    this.setState({
      list: [...this.state.list, task]
    })
  }

  
  render () {
    // console.log(this.state.list)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.add} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
