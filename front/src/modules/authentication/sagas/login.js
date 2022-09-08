import { takeLatest } from 'redux-saga/effects'
import { loginUser, success, error } from '../reducers/login'
import SagaCall from '../../saga.call';
 
const API_URL = `/api/login`;
const saga = 'login';

function* loginUserSaga(params) {
    yield SagaCall({ saga, success: success.type, error }, API_URL, 'POST', params.payload) ;
}

export function* login() {
     yield takeLatest(loginUser.type, loginUserSaga);
}