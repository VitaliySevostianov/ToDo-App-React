import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchFilter/SearchPanel';
import FilterPanel from '../SearchFilter/FilterPanel';
import TodoList from '../TodoList/TodoList';
import InputPanel from '../InputPanel/InputPanel';


import "./App.css";


class App extends Component{
    
    firstId = 10;

    state = {
        filter: '',
        term: '',
        todoData: [
            this.createTodoItem('Drink cofee'),
            this.createTodoItem('Go for a walk'),
            this.createTodoItem('Build an app')
        ]
    };

    filter(items, filter){
        switch(filter){
            case 'all' : return items;
            case 'active' : return items.filter(el => !el.done);
            case 'done' : return items.filter(el => el.done);
            default: return items;    
        };
    };

    search(items, term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1;
        });
    };

    createTodoItem(label){
        return{
            label: label,
            important: false,
            done: false,
            id: this.firstId++,
        };
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1),
        ]
    };

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

    onAllClick = () => {
        this.setState({
            filter: 'all'
        });
    };
  
    onActiveClick = () => {
        this.setState({
            filter: 'active'
        });
    };
  
    onDoneClick = () => {
        this.setState({
            filter: 'done'
        })
    };

    onSearch = (term) => {
        this.setState({term})
    }

    render(){
        
        const {todoData, term} = this.state;

        const visibleItems = this.search(this.filter(todoData, this.state.filter), term.toLowerCase());

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.filter((el) => !el.done).length;
        
        return (
            
            <div className = "app">
                <AppHeader  toDo = {todoCount} done = {doneCount}/>

                {/* /* <SearchFilter 
                onAllClick = {this.onAllClick} 
                onActiveClick = {this.onActiveClick}
                onDoneClick = {this.onDoneClick}
                onSearch = {this.onSearch}
                filter = {this.state.filter}/> */}
                <div className = 'search-filter'>
                    <SearchPanel 
                    onSearch = {this.onSearch}/>
                    <FilterPanel 
                    onAllClick = {this.onAllClick}
                    onActiveClick = {this.onActiveClick}
                    onDoneClick = {this.onDoneClick}
                    filter = {this.state.filter}/>
                </div>
                <TodoList 
                todos = { visibleItems }
                onDeleted = {this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}/>
                
                <InputPanel onItemAdded = {this.addItem}/>
            </div>
        );
    };
}

export default App;