import React, {Component} from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {
  
    render(){


    const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

    let classNames = 'todo-text';
    let completeCheckClass = "complete-check"
    if(done){
        classNames += ' done';
        completeCheckClass += ' changed'
    }
    if(important){
        classNames += ' important';
    }
    
    return (<span className = 'todo-list-item'>
                <span className = 'main-span'>
                    <div className = {completeCheckClass} >✓</div>
                    <span
                    className = {classNames}
                    onClick = {onToggleDone}>
                        { label }
                    </span>
                </span>
                <div className = 'buttons'>
                    <button type = 'button' className = 'btn btn-outline-success btn-sm' onClick = {onToggleImportant}><i className="fa fa-exclamation" /></button>
                    <button type = 'button' className = 'btn btn-outline-danger btn-sm' onClick = {onDeleted}><i className="fa fa-trash-o" /></button>
                </div>
            </span>
            )
    }
}
