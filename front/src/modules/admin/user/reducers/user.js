import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../../../App.exports';

const user = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: STATUS.IDLE,
        error: null
    },
    reducers: {
        init(state) {
            return Object.assign({}, state, {
                data:  null,
                error: null,
                status: STATUS.IDLE
            });
        },
        resetStatus(state) {
            return Object.assign({}, state, {
                status: STATUS.IDLE
            });
        },
        loading(state) {
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        saveFromModal(state) {
            console.log("saveFromModal")
            return Object.assign({}, state, {
                status: STATUS.CRUD
            });
        },
        updateItem(state){
            console.log("update")
            return Object.assign({}, state, {
                error: null,
                status: STATUS.CRUD
            });
        },
        removeItem(state){
            return Object.assign({}, state, {
                error: null,
                status: STATUS.CRUD
            });
        },
        getAll(state) {
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        success(state, action) {
            return Object.assign({}, state, {
                data: action.payload,
                error: null,
                status: STATUS.SUCCESS
            });
        },
        error: (state, action) => {
            return Object.assign({}, state, {
                error: action.payload,
                status: STATUS.ERROR
            });
        },
    }
})

export const { init, resetStatus, loading, success, getAll, saveFromModal, updateItem, removeItem, error } = user.actions;
export const userState = (state) => state.user
export default user.reducer

/*
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
--------------------------------------------------




*/