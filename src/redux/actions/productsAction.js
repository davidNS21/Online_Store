export const addProductAction = state => {

    return{
        type: "ADD_PRODUCT",
        payload: state
    };
    
}

export const deleteProductAction = id => {

    return{
        type: "DELETE_PRODUCT",
        payload: id
    };
}

export const substractQuantityProductAction = id => {

    return{
        type: "SUBSTRACT_QUANTITY_PRODUCT",
        payload: id
    }
}

export const addQuantityProductAction = (id, quantity) => {

    return{
        type: "ADD_QUANTITY_PRODUCT",
        payload: id,
        quantity: quantity
    }
}

export const deleteAllProductsAction = () => {

    return{
        type: "DELETE_ALL_PRODUCTS",
    };
}