const initialProps = {
    products: []
}

export default function (state = initialProps, action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case "DELETE_PRODUCT":
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload )
            }

        case "SUBSTRACT_QUANTITY_PRODUCT":
            state.products.forEach(product => {
                if(product.id === action.payload) {
                    product.quantity = product.quantity -1;
                }
            });
            return{
                ...state,
                products: state.products
            }

        case "ADD_QUANTITY_PRODUCT":
            state.products.forEach(product => {
                if(product.id === action.payload) {
                    product.quantity = product.quantity + action.quantity;
                }
            });
            return{
                ...state,
                products: state.products
            }

        case "DELETE_ALL_PRODUCTS":
            return{
                ...state,
                products: []
            }
        default:
            return state;
    }
}