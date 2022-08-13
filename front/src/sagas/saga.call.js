import { call, put } from 'redux-saga/effects'
import apiCall from './api.call';

function* SagaCall(saga, URL, method = 'GET', params, AFTER_TYPE, onSuccess) {
    try {
        yield put({ type: saga.saga + '/loading' });
        const response = yield call(apiCall, URL, { method: method ? method : 'GET' }, params ? params : null);
        yield put({ type: onSuccess ? onSuccess : saga.success, payload: response });
        /* if (response.status === "ok") {
             if (AFTER_TYPE) {
                 yield put({ type: AFTER_TYPE, payload: params });
             }
         }*/
    } catch (e) {
        console.log("error", e)
        yield put({ type: saga.saga + '/error', payload: { status: "error", message: e.message } });
    }
}

export default SagaCall;