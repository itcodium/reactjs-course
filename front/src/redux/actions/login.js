import LOGIN from '../types/login';

const check = (payload) => ({
    type: LOGIN.FETCH,
    payload: payload
})

const getMenu = (payload) => ({
    type: LOGIN.FETCH_MENU,
    payload: payload
})
const out = () => ({
    type: LOGIN.OUT,
    payload: null
})
const clear = () => ({
    type: LOGIN.CLEAR,
    payload: null
})
const Login = {
    check: check,
    out: out,
    clear: clear,
    getMenu: getMenu
};
export default Login;

