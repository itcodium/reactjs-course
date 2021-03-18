import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../sagaCall';
import MENU from '../../../redux/types/menu';

const API_URL = `/api/menu`;

function* fetchMenuFull() {
    yield SagaCall(MENU, API_URL + "/full", "GET");
}

function* addSameLevel(params) {
    console.log('params: ', params);
    yield SagaCall(
        MENU,
        API_URL + "/samelevel",
        'POST',
        params.payload,
        MENU.FETCH,
        MENU.ADD_SAME_LEVEL_SUCCESS
    );
}
function* remove(params) {
    yield SagaCall(
        MENU,
        API_URL + "/" + params.payload.id_menu,
        'DELETE',
        params.payload,
        MENU.FETCH,
        MENU.ADD_SAME_LEVEL_SUCCESS
    );
}
/*function* addChild() {
    yield SagaCall(MENU, API_URL);
}*/
export function* menu() {
    yield takeLatest(MENU.FETCH, fetchMenuFull);
    yield takeLatest(MENU.ADD_SAME_LEVEL, addSameLevel);
    yield takeLatest(MENU.DELETE, remove);
    /*
    yield take(MENU.ADD_CHILD, addChild);
    */
}
