import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../../App.exports';

const login = createSlice({
    name: 'login',
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
        logout(state) {
            console.log("LOG OUT");
            localStorage.clear();
            return Object.assign({}, state, {
                data: {},
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
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        success(state, action) {
            localStorage.setItem('id_usuario', action.payload?.user?.id_usuario);
            localStorage.setItem('token', action.payload?.token);
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

export const { init, loading, success, loginUser, logout, error } = login.actions;

export const loginState = (state) => state.login
export default login.reducer