import React, { useState } from 'react';

import Header from './Header';
import SideBar from './SideBar';
import ProductsRouter from './ProductsRouter';
import Cart from './Cart';

import '../assets/css/MainPage.scss';

export default function MainPage(){

    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => {
        setCartOpen(true);
    }

    const claseCart = () => {
        setCartOpen(false);
    }

    return(
        <>
            <Header
                openCart = {openCart}
            />
            <div className="front-page">
                <div className="sidebar-wrap">
                    <SideBar />
                </div>
                <ProductsRouter />
                <Cart
                    cartOpen = {cartOpen}
                    closeCart = {claseCart}
                />
            </div>
        </>
    );
}

