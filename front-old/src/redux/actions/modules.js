import MODULE from '../types/modules';

const get = (payload) => ({
    type: MODULE.FETCH,
    payload: payload
})

const Module = {
    get: get
};
export default Module;

