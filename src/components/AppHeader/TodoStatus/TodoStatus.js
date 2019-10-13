import React from 'react';
import './TodoStatus.css'

const TodoStatus = ({toDo, done}) => {
    return (
    <div className = 'todo-status'>
        <span>{toDo} more to do, {done} done</span>
    </div>
    )
}

export default TodoStatus;