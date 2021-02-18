import MODULE from '../types/modules'

const initialState = {
    modules: [],
    status: 'idle',
    loading: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case MODULE.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: null,
                status: "loading"
            });
        }
        case MODULE.SUCCESS: {
            const item = Object.assign({}, state, {
                modules: action.payload.data,
                error: null,
                loading: false,
                status: "succeeded"
            });
            return item;
        }
        case MODULE.ERROR: {
            return Object.assign({}, state, {
                error: action.payload,
                loading: false,
                status: "failed"
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;
