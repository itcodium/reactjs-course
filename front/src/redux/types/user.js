import { USER } from '../constants/actionTypes';
const UserTypes = {
    INIT: USER.INIT,
    FETCH: USER.FETCH,
    SUCCESS: USER.SUCCESS,
    PENDING: USER.PENDING,
    ERROR: USER.ERROR,
    DELETE: USER.DELETE,
    PUT: USER.PUT,
    POST: USER.POST,
    SAVE: "USER_SAVE",
}
export default UserTypes;