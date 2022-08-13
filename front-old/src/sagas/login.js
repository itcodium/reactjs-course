import { takeLatest } from 'redux-saga/effects'
import SagaCall from './sagaCall';
import LOGIN from '../redux/types/login';

const API_URL = `/api/login`;
function* checkLogin(params) {
    yield SagaCall(
        LOGIN,
        API_URL,
        'POST',
        params.payload
    );
}
function* fetchMenu() {
    yield SagaCall(
        LOGIN,
        `/api/menu/0`,
        'GET',
        null,
        null,
        LOGIN.FETCH_MENU_SUCCESS
    );
}

export function* login() {
    yield takeLatest(LOGIN.FETCH, checkLogin);
    yield takeLatest(LOGIN.FETCH_MENU, fetchMenu);
}
