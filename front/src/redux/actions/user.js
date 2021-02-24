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

const User = {
    init: init,
    save: save,
    get: get
};
export default User;

