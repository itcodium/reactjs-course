import { combineReducers } from 'redux'
import { 
    productsReducer, 
    productsDetailReducer, 
    cartReducer,
    ordersReducer,
    userReducer
} from './modules/e-commerce/index';

const appReducer = combineReducers({
    products: productsReducer,
    productsDetail: productsDetailReducer,
    cart: cartReducer,
    orders: ordersReducer,
    user: userReducer,
});

const reducerRoot = (state, action) => {
    let new_state = (action.type === 'LOGIN_SUCCESS') ? undefined : state;
    return appReducer(new_state, action)
}

export default reducerRoot;