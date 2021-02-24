import USER from '../types/user'

const initialState = {
    users: [],
    status: 'idle',
    error: null
}

function reducer(state = {}, action) {
    switch (action.type) {
        case USER.FETCH: {
            return Object.assign({}, state, {
                users: [],
                error: null,
                status: "loading"
            });
        }
        case USER.SAVE: {
            return Object.assign({}, state, {
                error: null,
                status: "loading"
            });
        }
        case USER.SUCCESS: {
            return Object.assign({}, state, {
                users: action.payload.data,
                error: null,
                status: "succeeded"
            });
        }
        case USER.ERROR: {
            return Object.assign({}, state, {
                users: [],
                error: action.payload,
                status: "failed",
                payload: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;