import { createSlice, current } from '@reduxjs/toolkit'
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
                status: STATUS.IDLE,
                error: null,
            });
        },
        resetStatus(state) {
            return Object.assign({}, state, {
                status: STATUS.IDLE,
                error: null,
            });
        },
        fetchByUser: loading,
        changeUserPrivilege: crud,
        uiRefresh(state, action){
            let menu = menuFind(current(state).data, action.payload);
            return Object.assign({}, state, {
                data: menu,
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
    fetchByUser, fetchByUserSuccess, 
    changeUserPrivilege, success,  uiRefresh 
} = userPrivileges.actions;

export const userPrivilegesState = (state) => state.userPrivileges;
export default userPrivileges.reducer;
 
const menuFind = (menu, target) => {
    return menu.map(item => {
        if (item.id_menu == target.id_menu) {
            item = { ...item, enabled: target.checked }
        }
        
        if (item.items.length) {
            return  { ...item, items: menuFind(item.items, target)}
        }else{
            return item;
        }
    })
}
 