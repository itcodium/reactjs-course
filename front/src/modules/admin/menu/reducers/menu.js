import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../../store/status';

const menu = createSlice({
    name: 'menu',
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
        getAll(state) {
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        success(state, action) {
            console.log("menu state", action.payload)
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

export const { init, loading, success, getAll, error } = menu.actions;
export const menuState = (state) => state.menu
export default menu.reducer