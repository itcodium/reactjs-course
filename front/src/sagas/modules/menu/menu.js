import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../sagaCall';
import MENU from '../../../redux/types/menu';

const API_URL = `/api/menu`;



function* addSameLevel(params) {
    yield SagaCall(
        MENU,
        API_URL + "/samelevel",
        'POST',
        params.payload,
        MENU.FETCH,
        MENU.ADD_CRUD_SUCCESS
    );
}
function* addChild(params) {
    yield SagaCall(
        MENU,
        API_URL + "/child",
        'POST',
        params.payload,
        MENU.FETCH,
        MENU.ADD_CRUD_SUCCESS
    );
}
function* remove(params) {
    yield SagaCall(
        MENU,
        API_URL + "/" + params.payload.id_menu,
        'DELETE',
        params.payload,
        MENU.FETCH,
        MENU.ADD_CRUD_SUCCESS
    );
}
function* update(params) {
    yield SagaCall(
        MENU,
        API_URL + "/" + params.payload.id_menu,
        'PUT',
        params.payload,
        MENU.FETCH,
        MENU.ADD_CRUD_SUCCESS
    );
}

function* fetchMenuFull() {
    yield SagaCall(MENU, API_URL + "/full", "GET");
}
function* fetchByUser(params) {
    yield SagaCall(
        MENU,
        API_URL + "/" + params.payload.id_usuario,
        null,
        null,
        null,
        MENU.FETCH_BY_USER_SUCCESS

    );
}

function* changeUserPrivilege(params) {
    yield SagaCall(
        MENU,
        API_URL + "/privileges",
        'PUT',
        params.payload,
        MENU.UI_REFRESH
    );
}
export function* menu() {
    yield takeLatest(MENU.FETCH, fetchMenuFull);
    yield takeLatest(MENU.FETCH_BY_USER, fetchByUser);
    yield takeLatest(MENU.ADD_SAME_LEVEL, addSameLevel);
    yield takeLatest(MENU.ADD_CHILD, addChild);
    yield takeLatest(MENU.CHANGE_USER_PRIVILEGE, changeUserPrivilege);
    yield takeLatest(MENU.DELETE, remove);
    yield takeLatest(MENU.PUT, update);

}
