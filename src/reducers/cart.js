import * as  types from '../constants/actionTypes';

let dataCart = JSON.parse(localStorage.getItem('cart'));
let initialState = dataCart ? dataCart : [];

const findProductInCart = (cart, product) => {
    let index = -1;
    if( cart.length > 0 ) {
        for( let i =0; i < cart.length; i++ ) {
            if( cart[i].product.id === product.id ) {
                index = i;
                break;
            }
        }
    }
    return index;
};

const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if( index !== -1 ) {
                state[index].quantity += quantity;
            }
            else{
                state.push({
                    product,quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_CART:
            index = findProductInCart(state, product);
            if( index !== -1 ) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.UPDATE_PRODUCT_CART:
            index = findProductInCart(state, product);
            if( index !== -1 ) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
};

export default cart;