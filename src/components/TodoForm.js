import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleTaskAdd(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='todo-form'>
                <input 
                value={this.state.inputValue} 
                onChange={this.handleChanges} 
                type="text" 
                name="task"
                className='todo-input'
                />
                <button className='todo-button'>Add Task</button>
            </form >
        );
    }
}

export default TodoForm
