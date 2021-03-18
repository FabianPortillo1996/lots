import {ADD_ITEM_TO_CART, REMOVE_ITEM_FORM_CART, UPDATE_ITEM_FROM_CART} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    cart: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.brand]: {
                        ...state.cart[action.brand],
                        [action.product.id]: {
                            ...action.product,
                            totalPrice: action.product.precio
                        }
                    }
                }
            };
        case UPDATE_ITEM_FROM_CART :
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.brand]: {
                        [action.product.id]: {
                            ...action.product,
                            cantidad: action.quantity,
                            totalPrice: action.quantity * action.product.precio
                        }
                    }
                }
            };
        case REMOVE_ITEM_FORM_CART :
            let cart = state.cart;
            delete cart[action.brand][action.product.id];
            return {
                ...state,
                cart: cart
            };
        default:
            return state;
    }
};

export default reducer;
