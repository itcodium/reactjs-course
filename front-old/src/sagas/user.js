import { takeLatest } from 'redux-saga/effects'
import SagaCall from './sagaCall';
import USER from '../redux/types/user';

const API_URL = `/api/user`;
function* saveFromModal(params) {
    yield SagaCall(
        USER,
        API_URL,
        'POST',
        params.payload,
        USER.FETCH
    );
}

function* save(params) {
    yield SagaCall(
        USER,
        API_URL,
        'POST',
        params.payload,
        null,
        USER.SAVE_SUCCESS
    );
}

function* update(params) {
    yield SagaCall(
        USER,
        API_URL + "/" + params.payload.id_usuario,
        'PUT',
        params.payload,
        USER.FETCH
    );
}


function* remove(params) {
    yield SagaCall(
        USER,
        API_URL + "/" + params.payload.id_usuario,
        'DELETE',
        params.payload,
        USER.FETCH
    );
}
function* get() {
    yield SagaCall(USER, API_URL);
}
export function* user() {
    yield takeLatest(USER.SAVE, save);
    yield takeLatest(USER.SAVE_MODAL, saveFromModal);
    yield takeLatest(USER.PUT, update);
    yield takeLatest(USER.FETCH, get);
    yield takeLatest(USER.DELETE, remove);

}

