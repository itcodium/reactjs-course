import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../store/status';

const orders = createSlice({
    name: 'orders',
    initialState: {
        data: {},
        status: STATUS.IDLE,
        error: null
    },
    reducers: {
        init(state, action) {
            return Object.assign({}, state, {
                data: {},
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
        post(state, action) {
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        successFetch(state, action) {
            return Object.assign({}, state, {
                data: { ...state.data, products: action.payload },
                error: null,
                status: STATUS.SUCCESS
            });
        },
        successOrder(state, action) {
            return Object.assign({}, state, {
                data: { ...state.data, order: action.payload },
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

export const { init, loading, successFetch, successOrder, fetch, post, error } = orders.actions;

export const ordersState = (state) => state.orders
export default orders.reducer