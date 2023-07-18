import { takeLatest } from 'redux-saga/effects'
import { getAll, success, saveFromModal, updateItem, removeItem,  error } from '../reducers/user'
import SagaCall from '../../../saga.call';
 
const API_URL = `/api/user`;
const saga = 'user';

function* saveFromModalSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL,
        'POST',
        params.payload,
        getAll
    );
}
function* updateSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_usuario,
        'PUT',
        params.payload,
        getAll
    );
}

function* removeSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_usuario,
        'DELETE',
        null,
        getAll 
    );
}

function* getAllUsers() {
    yield SagaCall({ saga, success: success.type, error }, API_URL, null, null) ;
}

export function* user() {
     yield takeLatest(getAll.type, getAllUsers);
     yield takeLatest(saveFromModal.type, saveFromModalSaga);
     yield takeLatest(updateItem.type, updateSaga);
     yield takeLatest(removeItem.type, removeSaga);
}
 