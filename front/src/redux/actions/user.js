import USER from '../types/user';

const save = (payload) => ({
    type: USER.SAVE,
    payload: payload
})

const User = {
    save: save
};
export default User;

