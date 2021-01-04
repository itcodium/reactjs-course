import { combineReducers } from 'redux'
import login from './login';
import user from './user';
import recipes from './recipes';
import products from './products';

const reducerRoot = combineReducers({
    recipes,
    login,
    user,
    products
});

export default reducerRoot;