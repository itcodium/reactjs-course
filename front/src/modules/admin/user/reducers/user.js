import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../../store/status';

const user = createSlice({
    name: 'user',
    initialState: {
        data: {},
        status: STATUS.IDLE,
        error: null
    },
    reducers: {
        init(state, action) {
            return Object.assign({}, state, {
                data: action.payload || {},
                error: null,
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
        deleteItem(state){
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

export const { init, loading, success, getAll, saveFromModal, updateItem, deleteItem, error } = user.actions;
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