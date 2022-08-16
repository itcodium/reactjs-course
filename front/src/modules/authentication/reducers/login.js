import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../store/status';

const login = createSlice({
    name: 'login',
    initialState: {
        data: {},
        status: STATUS.IDLE,
        error: null
    },
    reducers: {
        init(state, action) {
            console.log("++++ state, action +++", state, action , STATUS.IDLE)
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
        loginUser(state) {
            console.log("state", state)
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

export const { init, loading, success, loginUser, error } = login.actions;

export const loginState = (state) => state.login
export default login.reducer