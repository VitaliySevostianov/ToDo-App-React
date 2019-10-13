import React from 'react';
import TodoStatus from './TodoStatus/TodoStatus';
import './AppHeader.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className = 'app-header'>
            <h1>Todo List</h1>
            <TodoStatus toDo = {toDo} done = {done} />
        </div>
    );
}

export default AppHeader;