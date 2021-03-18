import { MENU } from '../constants/actionTypes';
const MenuTypes = {
    INIT: MENU.INIT,
    FETCH: MENU.FETCH,
    SUCCESS: MENU.SUCCESS,
    PENDING: MENU.PENDING,
    ERROR: MENU.ERROR,
    ADD_SAME_LEVEL: "MENU_ADD_SAME_LEVEL",
    ADD_SAME_LEVEL_SUCCESS: "MENU_ADD_SAME_LEVEL_SUCCESS",
    ADD_CHILD: "MENU_ADD_CHILD",
    DELETE: MENU.DELETE,
    FETCH_FULL: 'MENU_FETCH_FULL',

}
export default MenuTypes;