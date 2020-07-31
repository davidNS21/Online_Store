// Functions to set and get the products to and from localStorage

export const setStateLocalStorage = state => {
    localStorage.setItem("cart", JSON.stringify(state));
}

export const getStateLocalStorage = () => {
    const productsStorage = localStorage.getItem("cart");

    if(productsStorage === null) return undefined;
    return JSON.parse(productsStorage);
}

