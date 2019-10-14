import React, {Component} from 'react';
import "./SearchPanel.css"

export default class SearchPanel extends Component{
    
    state = {
        term: ''
    };
    
    onTermChange = (e) => {
        const {onSearch} = this.props;
            this.setState({
                term: e.target.value
            }); 
        onSearch(e.target.value);
    };

    render(){
        return (
            <input 
            className ="search-panel" 
            placeholder = "Search what you need" 
            value={this.state.term}
            onChange={ this.onTermChange }
            />
        );
    };
    
}