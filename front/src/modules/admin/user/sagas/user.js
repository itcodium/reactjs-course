import { takeLatest } from 'redux-saga/effects'
import { getAll, success, saveFromModal, updateItem,  error } from '../reducers/user'
import SagaCall from '../../../saga.call';
 
const API_URL = `/api/user`;
const saga = 'user';

function* saveFromModalSaga(params) {
    console.log("saveFromModal(params)", params);
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL,
        'POST',
        params.payload,
        null
    );
}
function* updateSaga(params) {
    console.log("updateSaga(params)", params)
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_usuario,
        'PUT',
        params.payload,
        null //USER.FETCH
    );
}


function* getAllUsers() {
    yield SagaCall({ saga, success: success.type, error }, API_URL, null, null) ;
}

export function* user() {
    console.log("fetch.type, fetch", getAll.type);
     yield takeLatest(getAll.type, getAllUsers);
     yield takeLatest(saveFromModal.type, saveFromModalSaga);
     yield takeLatest(updateItem.type, updateSaga);
}

/*


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


*/