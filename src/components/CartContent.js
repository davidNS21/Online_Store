import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, deleteAllProductsAction, substractQuantityProductAction } from '../redux/actions/productsAction';

import CartProduct from './CartProduct';

export default function CartContent() {

    // Get products from Redux state
    const storeProducts = useSelector(state => state.cart.products);

    // Delete product/s from Redux state
    const dispatch = useDispatch();
    const deleteProduct = id => dispatch(deleteProductAction(id));
    const deleteAllProducts = () => dispatch(deleteAllProductsAction());
    const substractQuantityProduct = id => dispatch(substractQuantityProductAction(id));

    const removeItem = (product) => {
        if(product.quantity === 1){
            deleteProduct(product.id);
        } else {
            substractQuantityProduct(product.id);
        }
    }

    if(storeProducts.length == 0){
        return(
            <div className="cart-content">
                <p>Cart is empty</p>
            </div>
            
        );
    } else {
        return(
            <div className="cart-content">
                {
                    storeProducts.map((product) => (
                        <CartProduct
                            key = {product.id}
                            product = {product}
                            quantity = {product.quantity}
                            removeItem = {removeItem}
                        />
                    ))
                }
                <CartFooter
                    deleteAllProducts = {deleteAllProducts}
                />
            </div>
            
        );
    }
}


function CartFooter(props) {

    const { deleteAllProducts } = props;

    return(
        <div className="cart-content__footer">
            <button className="cart-content__footer-clearallbutton" onClick={deleteAllProducts} >Clear All</button>
            <button className="cart-content__footer-gotocheckoutbutton">Check out</button>
        </div>
    );
}