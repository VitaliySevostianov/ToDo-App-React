import React from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import FilterPanel from './FilterPanel/FilterPanel';
import './SearchFilter.css';

const SearchFilter = () => {

    return (
            <div className = 'search-filter'>
                <SearchPanel />
                <FilterPanel />
            </div>  
    );
}

export default SearchFilter;