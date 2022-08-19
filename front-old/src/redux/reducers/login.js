import LOGIN from '../types/login'
import STATUS from '../constants/status'
const initialState = {
    status: 'idle',
    loading: false,
    error: null,
    payload: {}
}

const localUser = localStorage.getItem('user') || null;
let jsonUser = null;
if (localUser) {
    jsonUser = JSON.parse(localUser);
    initialState.payload = jsonUser.payload;
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
            console.log('user: ', user);
            return user;
        }
        case LOGIN.FETCH_MENU: {
            return Object.assign({}, state, {
                status: STATUS.PENDING,
            });

        }
        case LOGIN.FETCH_MENU_SUCCESS: {
            const user = Object.assign({}, state, {
                ...state,
                payload: {
                    ...state.payload,
                    menu: action.payload.data
                },
                status: "MENU_SUCCESS"
            });
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }

        case LOGIN.ERROR: {
            return Object.assign({}, state, {
                error: action.payload,
                status: "failed",
                payload: action.payload
            });
        }
        case LOGIN.OUT: {
            const login = Object.assign({}, state, {
                ...initialState,
                payload: null
            });
            localStorage.removeItem('user');
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