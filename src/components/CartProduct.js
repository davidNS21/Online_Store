import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CartProduct (props) {
    
    const { product, removeItem } = props;

    const [quantity, setQuantity] = useState(product.quantity);

    const deleteItem = (product) => {
        removeItem(product);
        setQuantity(product.quantity);
    }

    return(
        <div className="cart-content__product">
            <div className="cart-content__product-image">
                <img src={product.image} />
            </div>
            <div className="cart-content__product-details">
                <h4>{product.name}</h4>
                <h5>{quantity} x {product.price}</h5>
                <DeleteIcon className="cart-content__product-details-icon" onClick={() => deleteItem(product)} />
            </div>
        </div>
    );
}