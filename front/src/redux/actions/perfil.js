import PERFIL from '../types/perfil';

const get = (payload) => ({
    type: PERFIL.FETCH,
    payload: payload
})

const save = (payload) => ({
    type: PERFIL.SAVE,
    payload: payload
})

const Perfil = {
    save: save,
    get: get
};
export default Perfil;

