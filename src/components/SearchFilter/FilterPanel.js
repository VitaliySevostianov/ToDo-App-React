import React, {Component} from 'react';

import './FilterPanel.css';
export default class FilterPanel extends Component{
  


  
  render(){
    

    const {filter, onAllClick, onActiveClick, onDoneClick} = this.props
    
    let allClassName = "button ";
    let activeClassName = "button ";
    let doneClassName = "button ";
    if(filter === "all"){
      allClassName += 'active-button';
    }
    if(filter === "active"){
      activeClassName += 'active-button';
    }
    if(filter === "done"){
      doneClassName += 'active-button';
    }
    return (
      <div className="btn-group">
        <button type="button"
                className = {allClassName}
                onClick = {onAllClick}>
                  All
                </button>
        <button type="button"
                className = {activeClassName}
                onClick = {onActiveClick}>
                  Active
                </button>
        <button type="button"
                className = {doneClassName}
                onClick = {onDoneClick}>
                  Done
                </button>
      </div>
    );
  }
}
