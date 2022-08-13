

import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../sagaCall';
import PERFIL from '../../../redux/types/perfil';

const API_URL = `/api/perfil`;

function* getAll() {
    yield SagaCall(PERFIL, API_URL);
}

export function* perfil() {
    yield takeLatest(PERFIL.FETCH, getAll);
}
