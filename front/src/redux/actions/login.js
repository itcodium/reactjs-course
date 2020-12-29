import LOGIN from '../types/login';

const check = (payload) => ({
    type: LOGIN.FETCH,
    payload: payload
})

const out = () => ({
    type: LOGIN.OUT,
    payload: null
})

const Login = {
    check: check,
    out: out
};
export default Login;

