import { takeLatest } from 'redux-saga/effects'
import { getAll, success, error } from '../reducers/menu'
import SagaCall from '../../../saga.call';
 
const API_URL = `/api/menu`;
const saga = 'menu';

function* getAllMenu(params) {
    console.log("get menu ", params)
    yield SagaCall({ saga, success: success.type, error }, API_URL, null, null) ;
}

export function* menu() {
    console.log("fetch.type, fetch", getAll.type);
     yield takeLatest(getAll.type, getAllMenu);
}