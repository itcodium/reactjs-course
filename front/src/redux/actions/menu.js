import MENU from '../types/menu';

const get = (payload) => ({
    type: MENU.FETCH,
    payload: payload
})

const Menu = {
    get: get
};
export default Menu;

