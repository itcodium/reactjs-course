import { combineReducers } from 'redux'
import { 
    productsReducer, 
    productsDetailReducer, 
    cartReducer,
    ordersReducer,
    userReducer
} from './modules/e-commerce/index';

import { 
    loginReducer, 
} from './modules/authentication/index';

const appReducer = combineReducers({
    products: productsReducer,
    productsDetail: productsDetailReducer,
    cart: cartReducer,
    orders: ordersReducer,
    user: userReducer,
    login: loginReducer
});

const reducerRoot = (state, action) => {
    console.log("+ reducerRoot (state, action) +", state, action)
    let new_state = (action.type === 'LOGIN_SUCCESS') ? undefined : state;
    return appReducer(new_state, action)
}

export default reducerRoot;