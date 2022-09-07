import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../../../../store/status';

// import MENU from '../types/menu'
// import STATUS from '../constants/status'

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

const userPrivileges = createSlice({
    name: 'userPrivileges',
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
            console.log("userPrivileges -> resetStatus", state);
            return Object.assign({}, state, {
                status: STATUS.IDLE
            });
        },
       /* fetchMenu(state) {
            return loading(state);
        },*/
        fetchByUser(state){
            console.log("userPrivileges -> fetchByUser", state);
            return loading(state);
        },
       /* addSameLevel (state) {
            return crud(state);
        },
        addChild (state){
            return crud(state);
        },*/
        changeUserPrivilege(state){
            return crud(state);
        },
        /*remove(state){
            return crud(state);
        }, */
        update(state){
            return crud(state);
        },
        /*addCrudSuccess(state, action){
            return Object.assign({}, state, {
                response: action.payload.data,
                error: null,
                status: STATUS.SUCCESS
            })
        },*/

        // menuUserPrivileges
        fetchByUserSuccess(state, action){
            console.log("userPrivileges -> fetchByUserSuccess", action.payload)
            return Object.assign({}, state, {
                data: action.payload,
                error: null,
                status: STATUS.SUCCESS
            });
        }, 
        // menuUserPrivileges
        uiRefresh(state, action){
            console.log("userPrivileges -> uiRefresh , action.payload", state, action.payload)
            return Object.assign({}, state, {
                data: menuFind(state, action.payload),
                error: null,
                status: STATUS.SUCCESS
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

export const { 
    init, resetStatus, error, update,
    // fetchMenu, remove, 
    fetchByUser, fetchByUserSuccess, 
    // addCrudSuccess, addChild, addSameLevel, 
    changeUserPrivilege, success,  uiRefresh 
} = userPrivileges.actions;

export const userPrivilegesState = (state) => state.userPrivileges;
export default userPrivileges.reducer;
 
const menuFind = (menu, target) => {

    return menu.map(item => {
        if (item.id_menu == target.id_menu) {
            item.enabled = target.checked;
            console.log('target: ', target);
        }
        if (item.items.length) {
            item.items = menuFind(item.items, target);
        }
        return item;
    })
}
 