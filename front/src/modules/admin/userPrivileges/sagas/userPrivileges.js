// import SagaCall from '../../sagaCall';
// import MENU from '../../../redux/types/menu';
import { takeLatest } from 'redux-saga/effects';
import { 
    
    fetchByUser, 
    fetchByUserSuccess, 
    /*fetchMenu,
    addCrudSuccess, 
    addChild, 
    addSameLevel, 
    remove, 
    update,*/
    changeUserPrivilege, 
    uiRefresh,
    success,
    error, 
} from '../reducers/userPrivileges';
import SagaCall from '../../../saga.call';
 
const API_URL = `/api/menu`;
const saga = "userPrivileges";
/*
function* addSameLevelSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/samelevel",
        'POST',
        params.payload,
        fetchMenu,
        addCrudSuccess.type
    );
}
function* addChildSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/child",
        'POST',
        params.payload,
        fetchMenu,
        addCrudSuccess.type
    );
}
function* removeSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_menu,
        'DELETE',
        params.payload,
        fetchMenu,
        addCrudSuccess.type
    );
}
function* updateSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_menu,
        'PUT',
        params.payload,
        fetchMenu,
        addCrudSuccess.type
    );
}

function* fetchMenuFullSaga() {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/full", 
        "GET");
}
*/
function* fetchByUserSaga(params) {
    console.log("fetchByUser -> Saga",success, params)
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/" + params.payload.id_usuario,
        null,
        null,
        null,
        fetchByUserSuccess.type
    );
}

function* changeUserPrivilegeSaga(params) {
    yield SagaCall(
        { saga, success: success.type, error },
        API_URL + "/privileges",
        'PUT',
        params.payload,
        uiRefresh
    );
}

export function* userPrivileges() {
    yield takeLatest(fetchByUser, fetchByUserSaga);
    yield takeLatest(changeUserPrivilege, changeUserPrivilegeSaga);

    //yield takeLatest(fetchMenu, fetchMenuFullSaga);
    //yield takeLatest(addSameLevel, addSameLevelSaga);
    //yield takeLatest(addChild, addChildSaga);
    //yield takeLatest(remove, removeSaga);
    //yield takeLatest(update, updateSaga);

}


 