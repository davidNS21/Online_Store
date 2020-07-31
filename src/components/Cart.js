import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

import CartContent from './CartContent';

import '../assets/css/Cart.scss';

export default function Cart(props) {

    const { cartOpen, closeCart } = props;

    const [abrirCarrito, setAbrirCarrito] = useState(cartOpen);
    const widthCartContent = abrirCarrito ? 400 : 0;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if(cartOpen){
            setAbrirCarrito(true);
        } else {
            setAbrirCarrito(false);
        }
    })

    if(cart.length == 0){
        return(
            <div className="cart" style={{width: widthCartContent}}>
                <CartContentHeader
                    closeCart = {closeCart}
                />
                <CartContent />
            </div>
        );
    }
}


function CartContentHeader(props) {

    const { closeCart } = props;

    return(
        <div className="cart-content__header">
            <h2>Cart</h2>
            <CloseIcon onClick={closeCart} />
        </div>
    );
}

