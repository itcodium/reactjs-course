
import { call, put, takeLatest } from 'redux-saga/effects'
import PRODUCTS from '../../../redux/types/products';
import apiCall from '../../../redux/api';

const API_URL = `api/product`;
function* fetchProduct() {
    try {
        yield put({ type: PRODUCTS.PENDING });
        const response = yield call(apiCall, API_URL);
        if (response.status === "ok") {
            yield put({ type: PRODUCTS.SUCCESS, payload: response });
        }
        else {
            yield put({ type: PRODUCTS.ERROR, payload: response });
        }
    } catch (e) {
        yield put({ type: PRODUCTS.ERROR, payload: { status: "error", message: e.message } });
    }
}
export function* products() {
    yield takeLatest(PRODUCTS.FETCH, fetchProduct);
}