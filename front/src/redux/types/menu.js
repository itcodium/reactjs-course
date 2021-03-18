import { MENU } from '../constants/actionTypes';
const MenuTypes = {
    INIT: MENU.INIT,
    FETCH: MENU.FETCH,
    SUCCESS: MENU.SUCCESS,
    PENDING: MENU.PENDING,
    ERROR: MENU.ERROR,
    DELETE: MENU.DELETE,
    PUT: MENU.PUT,
    ADD_SAME_LEVEL: "MENU_ADD_SAME_LEVEL",
    ADD_CHILD: "MENU_ADD_CHILD",
    ADD_CRUD_SUCCESS: "MENU_ADD_CRUD_SUCCESS",
}
export default MenuTypes;