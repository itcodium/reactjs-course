

import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../sagaCall';
import MODULE from '../../../redux/types/modules';

const API_URL = `/api/module`;

function* fetchModule() {
    yield SagaCall(MODULE, API_URL);
}

export function* modules() {
    yield takeLatest(MODULE.FETCH, fetchModule);
}
