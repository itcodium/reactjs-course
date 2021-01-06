
import { call, put, takeLatest } from 'redux-saga/effects'
import LOGIN from '../redux/types/login';
import apiCall from '../redux/api';

const urlLogin = `api/login`;
function* checkLogin(params) {
    try {
        yield put({ type: LOGIN.PENDING });
        const response = yield call(apiCall, urlLogin, {
            method: 'POST'
        }, params.payload);
        if (response.status === "ok" && response.data)
            yield put({ type: LOGIN.SUCCESS, payload: response });
        else {
            yield put({ type: LOGIN.ERROR, payload: response.data ? response : { status: "error", message: "null response" } });
        }
    } catch (e) {
        yield put({ type: LOGIN.ERROR, payload: { status: "error", message: e.message } });
    }
}
export function* login() {
    yield takeLatest(LOGIN.FETCH, checkLogin);
}