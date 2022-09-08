import { takeLatest } from 'redux-saga/effects';
import { 
    fetchByUser, 
    resetStatus,
    changeUserPrivilege, 
    uiRefresh,
    success,
    error, 
} from '../reducers/userPrivileges';
import SagaCall from '../../../saga.call';
 
const API_URL = `/api/menu`;
const saga = "userPrivileges";

function* fetchByUserSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_usuario,
        null,
        null,
        null,
        null
    );
}

function* changeUserPrivilegeSaga(params) {
    yield SagaCall(
        { saga, success: resetStatus.type, error },
        API_URL + "/privileges",
        'PUT',
        params.payload,
        uiRefresh
    );
}

export function* userPrivileges() {
    yield takeLatest(fetchByUser, fetchByUserSaga);
    yield takeLatest(changeUserPrivilege, changeUserPrivilegeSaga);
}


 