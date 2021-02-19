import USER from '../types/user';

const get = (payload) => ({
    type: USER.FETCH,
    payload: payload
})

const save = (payload) => ({
    type: USER.SAVE,
    payload: payload
})

const User = {
    save: save,
    get: get
};
export default User;

