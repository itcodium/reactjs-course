
import { call, put, takeLatest } from 'redux-saga/effects'
import USER from '../redux/types/user';
import apiCall from '../redux/api';

const API_URL = `api/user`;
function* saveUser(params) {
    try {
        yield put({ type: USER.PENDING });
        const response = yield call(apiCall, API_URL, {
            method: 'POST'
        }, params.payload);
        if (response.status === "ok")
            yield put({ type: USER.SUCCESS, payload: response });
        else {
            yield put({ type: USER.ERROR, payload: response });
        }
    } catch (e) {
        yield put({ type: USER.ERROR, payload: { status: "error", message: e.message } });
    }
}
export function* user() {
    yield takeLatest(USER.SAVE, saveUser);
}