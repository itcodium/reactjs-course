
import { call, put, takeLatest } from 'redux-saga/effects'
import MENU from '../../../redux/types/menu';

import apiCall from '../../../redux/api';
const API_URL = `/api/menu`;

function* fetchMenu() {
    try {
        yield put({ type: MENU.PENDING });
        const response = yield call(apiCall, API_URL);
        if (response.status === "ok") {
            yield put({ type: MENU.SUCCESS, payload: response });
        }
    } catch (e) {
        console.log('e: ', e);
        yield put({ type: MENU.ERROR, payload: { status: "error", message: e.message } });
    }
}



export function* menu() {
    yield takeLatest(MENU.FETCH, fetchMenu);
}