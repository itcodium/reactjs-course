import { combineReducers } from 'redux'
import login from './login';
import user from './user';
import recipes from './recipes';
import products from './products';
import productDetail from './productDetail';

const reducerRoot = combineReducers({
    recipes,
    login,
    user,
    products,
    productDetail
});

export default reducerRoot;