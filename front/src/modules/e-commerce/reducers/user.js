import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../store/status';

const user = createSlice({
    name: 'user',
    initialState: {
        data: {
            id: "uFipNT4fikj2dpfj0JgB",
            email: "test@test.com",
            name: "test",
            phone: "45556557"
        },
        status: STATUS.IDLE,
        error: null
    },
    reducers: {
        init(state, action) {
            return Object.assign({}, state, {
                data: action.payload,
                error: null,
                status: STATUS.IDLE
            });
        },
        loading(state, action) {
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        fetch(state, action) {
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

export const { init, loading, success, fetch, error } = user.actions;

export const userState = (state) => state.user
export default user.reducer