import LOGIN from '../types/login'

const initialState = {
    status: 'idle',
    loading: false,
    error: null
}

const localUser = localStorage.getItem('user') || null;
let jsonUser = null;
if (localUser) {
    jsonUser = JSON.parse(localUser);
    initialState.payload = jsonUser;
    if (jsonUser && initialState.payload) {
        //LoginService.setLogIn(true);
    }
}
function reducer(state = initialState || {}, action) {
    switch (action.type) {
        case LOGIN.FETCH: {
            return Object.assign({}, state, {
                status: "loading",
            });
        }
        case LOGIN.SUCCESS: {
            const user = Object.assign({}, state, {
                payload: action.payload.data,
                status: "succeeded"
            });
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }
        case LOGIN.ERROR: {
            return Object.assign({}, state, {
                status: "failed",
                payload: action.payload
            });
        }
        case LOGIN.OUT: {
            const login = Object.assign({}, state, { ...initialState, payload: null });
            return login;
        }
        case LOGIN.CLEAR: {
            return Object.assign({}, state, {
                payload: {}
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;