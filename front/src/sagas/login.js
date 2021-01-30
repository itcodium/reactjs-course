import { takeLatest } from 'redux-saga/effects'
import SagaCall from './sagaCall';
import MENU from '../redux/types/menu';
import LOGIN from '../redux/types/login';

const API_URL = `/api/login`;
function* checkLogin(params) {
    yield SagaCall(
        LOGIN,
        API_URL,
        'POST',
        params.payload,
        MENU.FETCH
    );
}

export function* login() {
    yield takeLatest(LOGIN.FETCH, checkLogin);
}
