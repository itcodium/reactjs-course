import { combineReducers } from 'redux'
import { 
    productsReducer, 
    productsDetailReducer, 
    cartReducer,
    ordersReducer,
    // userReducer
} from './modules/e-commerce/index';

import { 
    loginReducer, 
} from './modules/authentication/index';

import { 
    userReducer, 
    menuReducer, 
    userPrivilegesReducer,
} from './modules/admin/index';

const appReducer = combineReducers({
    products: productsReducer,
    productsDetail: productsDetailReducer,
    cart: cartReducer,
    orders: ordersReducer,
    admin: combineReducers({
        user: userReducer,
        menu: menuReducer,
        userPrivileges: userPrivilegesReducer
    }),
    login: loginReducer,
});

const reducerRoot = (state, action) => {
    console.log("+ reducerRoot (state, action) +", state, action)
    let new_state = (action.type === 'LOGIN_SUCCESS') ? undefined : state;
    return appReducer(new_state, action)
}

export default reducerRoot;