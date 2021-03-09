import USER from '../types/user';

const init = () => ({
    type: USER.INIT,
    payload: null
})
const get = (payload) => ({
    type: USER.FETCH,
    payload: payload
})

const save = (payload) => ({
    type: USER.SAVE,
    payload: payload
})

const remove = (payload) => {
    console.log('payload: ', payload);
    return {
        type: USER.DELETE,
        payload: payload
    }
}

const User = {
    init: init,
    save: save,
    get: get,
    remove: remove
};
export default User;

