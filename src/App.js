import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }

  handleTaskToggle = (taskId)=> {
    this.setState({
      todos: this.state.todos.map(task=>{
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return(task);
      })
    });
  }

  handleTaskAdd = (taskName) => {
    const task = {
      name: taskName,
      id: Date.now(),
      purchased: false
    };

    const newTodos = [...this.state.todos, task];

    this.setState({
      todos: newTodos
    });
  }

  handleTaskCompleted = () => {
    const newTodos = this.state.todos.filter(task => {
      return(!task.completed);
    });

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div>
        <h1>What's the plan today?</h1>
        <TodoForm handleTaskAdd={this.handleTaskAdd} />
        <TodoList todos={this.state.todos} handleTaskCompleted={this.handleTaskCompleted} handleTaskToggle={this.handleTaskToggle} />
      </div>
    );
  }
}

export default App;
