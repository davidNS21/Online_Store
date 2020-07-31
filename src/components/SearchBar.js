import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar(){

    return(
        
        <form className="searchbar" >
            <SearchIcon />
            <input type="text" />
        </form>
        
    );
}