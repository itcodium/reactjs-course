import USER from '../types/user'

const initialState = {
    user: {},
    users: [],
    status: 'idle',
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case USER.INIT: {
            return Object.assign({}, state, {
                error: null,
                status: "idle"
            });
        }
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
                status: "crud"
            });
        }
        case USER.PUT: {
            return Object.assign({}, state, {
                error: null,
                status: "crud"
            });
        }
        case USER.SAVE_MODAL: {
            return Object.assign({}, state, {
                error: null,
                status: "crud"
            });
        }

        case USER.DELETE: {
            return Object.assign({}, state, {
                error: null,
                status: "crud"
            });
        }
        case USER.SUCCESS: {
            return Object.assign({}, state, {
                list: action.payload.data,
                error: null,
                status: "succeeded"
            });
        }
        case USER.ERROR: {
            return Object.assign({}, state, {
                user: [],
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

/*
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

*/