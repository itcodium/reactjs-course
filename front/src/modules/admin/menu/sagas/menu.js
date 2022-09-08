import { takeLatest } from 'redux-saga/effects';
import { 
    fetchMenu,
    addCrudSuccess, 
    addChild, 
    addSameLevel, 
    remove, 
    update,
    success,
    error, 
} from '../reducers/menu';
import SagaCall from '../../../saga.call';
 
const API_URL = `/api/menu`;
const saga = "menu";

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

export function* menu() {
    yield takeLatest(fetchMenu, fetchMenuFullSaga);
    yield takeLatest(addSameLevel, addSameLevelSaga);
    yield takeLatest(addChild, addChildSaga);
    yield takeLatest(remove, removeSaga);
    yield takeLatest(update, updateSaga);
}