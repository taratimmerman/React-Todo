import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const handleClick = ()=> {
        props.handleTaskCompleted();
      }

    return (
        <div>
            {props.todos.map(task => (
                <Todo handleTaskToggle={props.handleTaskToggle} key={task.id} task={task} />
            ))}
            <button onClick={handleClick} className='clr-button'>Clear Completed</button>
        </div>
    )
}

export default TodoList
