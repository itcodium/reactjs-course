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
        /*fetchByUser(state){
            return loading(state);
        },*/
        addSameLevel (state) {
            return crud(state);
        },
        addChild (state){
            return crud(state);
        },
        /*changeUserPrivilege(state){
            return crud(state);
        },*/
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
       /* fetchByUserSuccess(state, action){
            return Object.assign({}, state, {
                menuUserPrivileges: action.payload.data,
                error: null,
                status: STATUS.SUCCESS
            });
        }, */
        
        /*
        + ADD_SAME_LEVEL
        + ADD_CHILD
        + ADD_CRUD_SUCCESS
        + FETCH_BY_USER_SUCCESS
        + SUCCESS
        + ERROR
        + CHANGE_USER_PRIVILEGE
        UI_REFRESH*/

        /*uiRefresh(state, action){
            console.log("state.menuUserPrivileges, action.payload", state.menuUserPrivileges, action.payload)
            const menu = menuFind(state.menuUserPrivileges, action.payload);
            return Object.assign({}, state, {
                menuUserPrivileges: menu,
                error: null,
                status: STATUS.SUCCESS
            });
        },*/
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
    // , changeUserPrivilege,  uiRefresh 
} = menu.actions;

export const menuState = (state) => state.menu;
export default menu.reducer;
 /*
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
 */