
import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../sagaCall';
import PRODUCTS from '../../../redux/types/products';
import PRODUCT_DETAIL from '../../../redux/types/productDetail';

const API_URL = `/api/product`;

function* fetchProduct() {
    yield SagaCall(PRODUCTS, API_URL);
}

function* fetchProductById(params) {
    const URL = API_URL + "/" + params.payload.id;
    yield SagaCall(PRODUCT_DETAIL, URL);
}

export function* products() {
    yield takeLatest(PRODUCTS.FETCH, fetchProduct);
    yield takeLatest(PRODUCT_DETAIL.FETCH, fetchProductById);
}