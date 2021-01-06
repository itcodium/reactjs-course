import LOGIN from '../types/login'
import LoginService from '../../services/LoginService';
const localUser = localStorage.getItem('user') || null;
let jsonUser = null;
if (localUser) {
    jsonUser = JSON.parse(localUser);
    if (jsonUser && jsonUser.payload) {
        LoginService.setLogIn(true);
    }
}
function reducer(state = jsonUser || {}, action) {
    switch (action.type) {
        case LOGIN.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case LOGIN.SUCCESS: {
            LoginService.setLogIn(true);
            const user = Object.assign({}, state, {
                payload: action.payload.data,
                error: false,
                loading: false,
            });
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }
        case LOGIN.ERROR: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload
            });
        }
        case LOGIN.OUT: {
            LoginService.setLogIn(false);
            return Object.assign({}, state, {
                error: false,
                loading: false,
                payload: {}
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;