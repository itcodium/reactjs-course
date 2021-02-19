import PERFIL from '../types/perfil'

const initialState = {
    perfil: [],
    status: 'idle',
    loading: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case PERFIL.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: null,
                status: "loading"
            });
        }
        case PERFIL.SAVE: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case PERFIL.SUCCESS: {
            return Object.assign({}, state, {
                perfil: action.payload.data,
                error: null,
                loading: false,
                status: "succeeded"
            });
        }
        case PERFIL.ERROR: {
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