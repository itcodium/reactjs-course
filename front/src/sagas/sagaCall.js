import { call, put } from 'redux-saga/effects'
import LOGIN from '../redux/types/login';
import apiCall from '../redux/api';

function* SagaCall(TYPE, URL, method = 'GET', params, AFTER_TYPE) {

    try {
        yield put({ type: TYPE.PENDING });
        const response = yield call(apiCall, URL, { method: method ? method : 'GET' }, params);
        if (response.status === "ok") {
            yield put({ type: TYPE.SUCCESS, payload: response });
            if (AFTER_TYPE) {
                yield put({ type: AFTER_TYPE });
            }
        }
    } catch (e) {
        if (e.code === "0001" || e.message === "Wrong number of segments") {
            yield put({ type: LOGIN.OUT });
        } else {
            yield put({ type: TYPE.ERROR, payload: { status: "error", message: e.message } });
        }
    }
}

export default SagaCall;