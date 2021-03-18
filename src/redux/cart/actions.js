import {ADD_ITEM_TO_CART, REMOVE_ITEM_FORM_CART, UPDATE_ITEM_FROM_CART} from "./constants";

export const addItemToCart = (product, brand) => ({
    type: ADD_ITEM_TO_CART,
    product, brand
});

export const updateItemFromCart = (product, quantity, brand) => ({
    type: UPDATE_ITEM_FROM_CART,
    product,
    quantity,
    brand
});

export const removeItemFromCart = (product, brand) => ({
    type: REMOVE_ITEM_FORM_CART,
    product, brand
});
