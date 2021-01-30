import { call, put, takeLatest } from 'redux-saga/effects'
import LOGIN from '../redux/types/login';
import MENU from '../redux/types/menu';
import apiCall from '../redux/api';

const API_URL = `/api/login`;
function* checkLogin(params) {
    try {
        yield put({ type: LOGIN.PENDING });
        const response = yield call(apiCall, API_URL, { method: 'POST' }, params.payload);
        if (response.status === "ok" && response.data) {
            yield put({ type: LOGIN.SUCCESS, payload: response });
            yield put({ type: MENU.FETCH })
        }
        else {
            yield put({ type: LOGIN.ERROR, payload: response ? response : { status: "error", message: "null response" } });
        }
    } catch (e) {

        yield put({ type: LOGIN.ERROR, payload: { status: "error", message: e.message } });
    }
}
export function* login() {
    yield takeLatest(LOGIN.FETCH, checkLogin);
}