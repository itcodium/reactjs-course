import { combineReducers } from 'redux'
import login from './login';
import user from './user';
import products from './products';
import productDetail from './productDetail';
import { menu } from './menu';
import modules from './modules';
import perfil from './perfil';

const appReducer = combineReducers({
    login,
    user,
    products,
    productDetail,
    menu,
    modules,
    perfil
});

const reducerRoot = (state, action) => {
    let new_state = (action.type === 'LOGIN_SUCCESS') ? undefined : state;
    return appReducer(new_state, action)
}

export default reducerRoot;