import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import '../assets/css/Header.scss';

import SearchBar from './SearchBar';

export default function Header(props){

    const { openCart } = props;

    return(
        <div className="header">
            <h1>tienda online</h1>
            <SearchBar />
            <div className="header__shopping-cart">
                <ShoppingCartIcon onClick={openCart} />
            </div>
        </div>
    );
}