import React, {Component} from 'react'

class NewTask extends Component {
    constructor () {
        super()
        this.state = {
            input: ''
        }
        this.add = this.add.bind(this)
    }

    handleChange(val) {
        this.setState({
            input: val
        })
    }
    add() {
        this.props.add(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <input 
                    value={this.state.input}
                    placeholder='Enter new task'
                    onChange={e => this.handleChange(e.target.value)} 
                />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default NewTask