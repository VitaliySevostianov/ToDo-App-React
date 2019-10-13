import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchFilter from '../SearchFilter/SearchFilter';
import TodoList from '../TodoList/TodoList';
import InputPanel from '../InputPanel/InputPanel';


import "./App.css";


class App extends Component{
    
    firstId = 10;

    state = {
        todoData: [
            this.createTodoItem('Drink cofee'),
            this.createTodoItem('Go for a walk'),
            this.createTodoItem('Build an app')
        ]
    };

    createTodoItem(label){
        return{
            label: label,
            important: false,
            done: false,
            id: this.firstId++,
        }
    };
    // findIndex(array, id){
    //     const index = array.findIndex((el) => el.id === id)
    // };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1),
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id)

            const updated = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1),
            ];

            return {
                todoData: updated
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const updated = [
                ...todoData,
                newItem
            ];
            return {
                todoData: updated
            };
        }) 
    };

    onToggleImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onToggleDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    render(){
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.filter((el) => !el.done).length
        
        return (
            <div className = "app">
                <AppHeader  toDo = {todoCount} done = {doneCount}/>
                <SearchFilter />
                <TodoList 
                todos = { todoData }
                onDeleted = {this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}/>
                <InputPanel onItemAdded = {this.addItem}/>
            </div>
        );
    };
}

export default App;