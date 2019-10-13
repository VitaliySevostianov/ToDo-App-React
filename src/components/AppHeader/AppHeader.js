import React from 'react';
import TodoStatus from './TodoStatus/TodoStatus';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <div className = 'app-header'>
            <h1>Todo List</h1>
            <TodoStatus />
        </div>
    );
}

export default AppHeader;