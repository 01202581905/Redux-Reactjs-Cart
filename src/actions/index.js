import * as types from '../constants/actionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    };
};

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    };
};

export const actRemoveProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT_CART,
        product
    };
};

export const actUpdateProduct = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_CART,
        quantity,
        product
    };
};