import MENU from '../types/menu'
import STATUS from '../constants/status'
const initialState = {
    menu: [],
    status: STATUS.IDLE,
    error: null
}

function menu(state = initialState, action) {
    switch (action.type) {
        case MENU.INIT: {
            return Object.assign({}, state, {
                error: null,
                status: STATUS.IDLE
            });
        }
        case MENU.FETCH: {
            return Object.assign({}, state, {
                status: STATUS.PENDING
            });
        }
        case MENU.FETCH_BY_USER: {
            return Object.assign({}, state, {
                status: STATUS.PENDING
            });
        }
        case MENU.ADD_SAME_LEVEL: {
            return Object.assign({}, state, {
                error: null,
                status: STATUS.CRUD
            });
        }
        case MENU.ADD_CHILD: {
            return Object.assign({}, state, {
                error: null,
                status: STATUS.CRUD
            });
        }
        case MENU.ADD_CRUD_SUCCESS: {
            return Object.assign({}, state, {
                response: action.payload.data,
                error: null,
                status: STATUS.SUCCESS
            });
        }
        case MENU.FETCH_BY_USER_SUCCESS: {
            return Object.assign({}, state, {
                menuUserPrivileges: action.payload.data,
                error: null,
                status: STATUS.SUCCESS
            });
        }
        case MENU.SUCCESS: {
            return Object.assign({}, state, {
                menu: action.payload.data,
                error: null,
                status: STATUS.SUCCESS
            });
        }
        case MENU.ERROR: {
            return Object.assign({}, state, {
                error: action.payload,
                status: STATUS.ERROR
            });
        }
        default: {
            return state;
        }
    }
}

export { menu }

