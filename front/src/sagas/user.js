import { takeLatest } from 'redux-saga/effects'
import SagaCall from './sagaCall';
import USER from '../redux/types/user';

const API_URL = `/api/user`;
function* save(params) {
    yield SagaCall(
        USER,
        API_URL,
        'POST',
        params.payload
    );
}
function* get() {
    yield SagaCall(USER, API_URL);
}



export function* user() {
    yield takeLatest(USER.SAVE, save);
    yield takeLatest(USER.FETCH, get);
}

