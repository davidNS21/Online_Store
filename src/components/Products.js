import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction, addQuantityProductAction } from '../redux/actions/productsAction';

import '../assets/css/Products.scss';
import { productos } from './Productos';

import Product from './Product';


export default function Products(props) {

    const { type } = props;

    const [products, setProducts] = useState([]);

   const getProducts = async () => {
       const querySanpshot = await db.collection(type).get();

       setProducts(querySanpshot);
   }

   useEffect(() => {
        getProducts();
   }, [products])
   

   // Function to add the products to the Redux state
   const dispatch = useDispatch();
   const addProductToRedux = state => dispatch(addProductAction(state));
   const addQuantityToProduct = (id, quantity) => dispatch(addQuantityProductAction(id, quantity));

   // Get the Redux state
   const productsFromStore = useSelector(state => state.cart.products);

   // Function to get the product and add ir to the Redux state
   const addProduct = (product, quantity) => {
       if(productsFromStore.length > 0){
           let contador = 0;
            productsFromStore.forEach(item => {
                if(item.id === product.id){
                    contador ++;
                    addQuantityToProduct(product.id, quantity);
                } 
            });
            if(contador === 0){
                product.quantity = quantity;
                addProductToRedux(product);
            }
       } else {
            product.quantity = quantity;
            addProductToRedux(product);
       }
       
    }


    return(
        <div className="products">
            {
                products.map((product, i) => (
                    <Product
                        key = {i}
                        product ={product}
                        addProduct = {addProduct}
                    />
                ))
            }
        </div>
        
    );
}


