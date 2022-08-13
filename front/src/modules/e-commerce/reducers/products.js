import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../store/status';
const products = createSlice({
    name: 'products',
    initialState: {
        data: {},
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

export const { init, loading, success, fetch, fetchById, fetchByIdSuccess, error } = products.actions;

export const productState = (state) => state.products
export default products.reducer