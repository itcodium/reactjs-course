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

const saveModal = (payload) => ({
    type: USER.SAVE_MODAL,
    payload: payload
})
const remove = (payload) => {
    return {
        type: USER.DELETE,
        payload: payload
    }
}
const update = (payload) => {
    return {
        type: USER.PUT,
        payload: payload
    }
}
const User = {
    init: init,
    save: save,
    saveModal: saveModal,
    get: get,
    remove: remove,
    update: update
};
export default User;

