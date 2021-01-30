import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../sagaCall';
import MENU from '../../../redux/types/menu';

const API_URL = `/api/menu`;

function* fetchMenu() {
    yield SagaCall(MENU, API_URL);
}

export function* menu() {
    yield takeLatest(MENU.FETCH, fetchMenu);
}