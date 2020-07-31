import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function Product(props) {

    const { addProduct } = props;

    const [product, setProduct] = useState(props.product);

    const [quantity, setQuantity] = useState(1);

    const onClickAddProduct = (product, quantity) => {
        addProduct(product, quantity);
        setQuantity(1);
    }

    
    return(
        <div className="product">
            <div className="product__image">
                <img src = {product.image} />
            </div>
            <div className="product__name">
                <h4>{product.name}</h4>
            </div>
            <div className="product__price">
                <h5>{product.price}</h5>
            </div> 
            <div className="product__footer">
                <div className="product__footer-quantity">
                    <h6>Quantity:  {quantity}</h6>
                    <RemoveIcon className="product__footer-quantity-iconRemove" onClick = {() => {if(quantity > 1) setQuantity(quantity -1); }} /> 
                    <AddIcon className="product__footer-quantity-iconAdd" onClick = {() => {setQuantity(quantity +1);}} /> 
                </div>
                <button className="product__footer-button" onClick={() => onClickAddProduct(product, quantity) }>Add</button>
            </div>
        </div>
    );
}