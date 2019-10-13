import React, {Component} from 'react';

import './FilterPanel.css';
export default class FilterPanel extends Component{
  


  
  render(){
    

    const {filter, onAllClick, onActiveClick, onDoneClick} = this.props
    
    let allClassName = "btn ";
    let activeClassName = "btn ";
    let doneClassName = "btn ";
    if(filter === "all"){
      allClassName += 'btn-info';
    }
    if(filter === "active"){
      activeClassName += 'btn-info';
    }
    if(filter === "done"){
      doneClassName += 'btn-info';
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
