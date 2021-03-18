import { combineReducers } from "redux";
import product from './products/reducer';
import cart from './cart/reducer';

export const indexReducer = combineReducers({
    product,
    cart
});

