import { call, put } from 'redux-saga/effects';
import ApiCall from './api.call';
import { logout } from './authentication/reducers/login';

function* SagaCall(saga, URL, method = 'GET', params, AFTER_TYPE, onSuccess) {
    try {
        yield put({ type: saga.saga + '/loading' });
        const response = yield call(ApiCall, URL, { method: method ? method : 'GET' }, params ? params : null);
        console.log("---- SagaCall response ----", response)
        yield put({ type: onSuccess ? onSuccess : saga.success, payload: response.data });
        
        if (response.status === "ok") {
             if (AFTER_TYPE) {
                 yield put({ type: AFTER_TYPE.type, payload: params });
             }
         }
    } catch (e) {
        if(e.code ==='10001'){
            yield put({ type: logout.type });
        }
        yield put({ type: saga.saga + '/error', payload: { status: "error", message: e.message } });
    }
}

export default SagaCall;