
import { call, put, takeLatest } from 'redux-saga/effects'
import PRODUCTS from '../../../redux/types/products';
import PRODUCT_DETAIL from '../../../redux/types/productDetail';

import apiCall from '../../../redux/api';
import HOST from '../../host'
const API_URL = `${HOST}/api/product`;

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
function* fetchProductById(params) {
    const URL = API_URL + "/" + params.payload.id;
    try {
        yield put({ type: PRODUCT_DETAIL.PENDING });
        const response = yield call(apiCall, URL);
        if (response.status === "ok") {
            yield put({ type: PRODUCT_DETAIL.SUCCESS, payload: response });
        }
        else {
            yield put({ type: PRODUCT_DETAIL.ERROR, payload: response });
        }
    } catch (e) {
        yield put({ type: PRODUCT_DETAIL.ERROR, payload: { status: "error", message: e.message } });
    }
}

export function* products() {
    yield takeLatest(PRODUCTS.FETCH, fetchProduct);
    yield takeLatest(PRODUCT_DETAIL.FETCH, fetchProductById);
}