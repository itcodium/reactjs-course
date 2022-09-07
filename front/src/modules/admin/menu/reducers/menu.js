import { createSlice } from '@reduxjs/toolkit';
import STATUS from '../../../../store/status';

const loading = (state) => {
    return Object.assign({}, state, {
        status: STATUS.LOADING
    });
}
const crud = (state) => {
    return Object.assign({}, state, {
        error: null,
        status: STATUS.CRUD
    });
}

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
        resetStatus(state) {
            return Object.assign({}, state, {
                status: STATUS.IDLE
            });
        },
        fetchMenu(state) {
            return loading(state);
        },
        addSameLevel (state) {
            return crud(state);
        },
        addChild (state){
            return crud(state);
        },
        remove(state){
            return crud(state);
        }, 
        update(state){
            return crud(state);
        },
        addCrudSuccess(state, action){
            return Object.assign({}, state, {
                response: action.payload.data,
                error: null,
                status: STATUS.SUCCESS
            })
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

export const { 
    init, resetStatus, error, remove, update,
    fetchMenu, fetchByUser, fetchByUserSuccess, 
    addCrudSuccess, addChild, addSameLevel, 
    success
} = menu.actions;

export const menuState = (state) => state.menu;
export default menu.reducer; 