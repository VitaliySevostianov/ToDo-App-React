import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchFilter from './components/SearchFilter/SearchFilter';


import "./index.css";


const App = () => {
    
    const todoData = [
        {label: 'Drink Cofee', important: false, id: 1},
        {label: 'Pass exam', important: true, id: 2},
        {label: 'Sleep', important: false, id: 3}
    ];
    
    return (
        <div className = "app">
            <AppHeader />
            <SearchFilter />
            <TodoList todos = { todoData }/>
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root'))