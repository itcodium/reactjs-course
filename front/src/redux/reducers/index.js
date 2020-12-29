import { combineReducers } from 'redux'
import login from './login';
import recipes from './recipes';

const reducerRoot = combineReducers({
    recipes,
    login
});

export default reducerRoot;