import USER from '../types/user'

function reducer(state = {}, action) {
    switch (action.type) {
        case USER.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case USER.SAVE: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case USER.SUCCESS: {
            const user = Object.assign({}, state, {
                users: action.payload.data,
                payload: action.payload,
                error: false,
                loading: false,
            });
            return user;
        }
        case USER.ERROR: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;