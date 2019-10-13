import React, {Component} from 'react';
import './InputPanel.css';

export default class InputPanel extends Component {
    
    state = {
        label: ''
    };
    
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };
    
    render(){
        return (
            <form 
            className = 'input-panel'
            onSubmit = {this.onSubmit}>
                <input 
                type = "text" 
                className = "input" 
                onChange = {this.onLabelChange}
                placeholder = "What`s need to be done" 
                value = {this.state.label}/>
                <button 
                className = "input-button"
                >
                    Add todo
                </button>
            </form>
        );
    };
}
