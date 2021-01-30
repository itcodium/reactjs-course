import { call, put } from 'redux-saga/effects'
import LOGIN from '../redux/types/login';
import apiCall from '../redux/api';

function* SagaCall(TYPE, URL) {
    try {
        yield put({ type: TYPE.PENDING });
        const response = yield call(apiCall, URL);
        if (response.status === "ok") {
            yield put({ type: TYPE.SUCCESS, payload: response });
        }
    } catch (e) {
        if (e.code === "0001") {
            yield put({ type: LOGIN.OUT });
        } else {
            yield put({ type: TYPE.ERROR, payload: { status: "error", message: e.message } });
        }
    }
}

export default SagaCall;