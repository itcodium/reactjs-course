import { takeLatest } from 'redux-saga/effects'
import ProductsCall from './products.call';
import { fetch, success, error } from '../reducers/products'

const collection = `products`;
const saga = 'products';

function* fetchProduct(params) {
    yield ProductsCall({ saga, success: success.type, error }, collection, { categoryId: params.payload.categoryId}) ;
}

export function* products() {
     yield takeLatest(fetch.type, fetchProduct);
}