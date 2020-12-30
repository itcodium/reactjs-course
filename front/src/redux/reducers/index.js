import { combineReducers } from 'redux'
import login from './login';
import user from './user';
import recipes from './recipes';

const reducerRoot = combineReducers({
    recipes,
    login,
    user
});

export default reducerRoot;