import { createStore } from 'redux';
import reducer from './reducers';
import { getStateLocalStorage, setStateLocalStorage } from '../utils/localStorage';

// To get the products from localStorage
const localStorageState = getStateLocalStorage();

const store = createStore(
    reducer,
    localStorageState,   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Add the products to the localStorage
store.subscribe(() => {
    setStateLocalStorage({
        cart: store.getState().cart
    })
})

export default store;