import MENU from '../types/menu';


const init = () => ({
    type: MENU.INIT,
    payload: null
})
const get = (payload) => ({
    type: MENU.FETCH,
    payload: payload
})
const getFull = () => ({
    type: MENU.FETCH
})
const addSameLevel = (payload) => ({
    type: MENU.ADD_SAME_LEVEL,
    payload: payload
})
const addChild = (payload) => ({
    type: MENU.ADD_CHILD,
    payload: payload
})
const remove = (payload) => {
    return {
        type: MENU.DELETE,
        payload: payload
    }
}

const update = (payload) => {
    return {
        type: MENU.PUT,
        payload: payload
    }
}
const Menu = {
    init: init,
    get: get,
    getFull: getFull,
    addSameLevel: addSameLevel,
    addChild: addChild,
    remove: remove,
    update: update
};
export default Menu;

