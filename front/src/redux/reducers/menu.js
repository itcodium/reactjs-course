import MENU from '../types/menu'
import STATUS from '../constants/status'
console.log('STATUS: ', STATUS);
const initialState = {
    menu: [],
    status: STATUS.IDLE
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case MENU.FETCH: {
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        }
        case MENU.SUCCESS: {
            return Object.assign({}, state, {
                menu: action.payload.data,
                status: STATUS.SUCCESS
            });
        }
        case MENU.ERROR: {
            return Object.assign({}, state, {
                payload: action.payload,
                status: STATUS.ERROR
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;