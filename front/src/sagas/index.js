import { all } from 'redux-saga/effects'
import { products } from './products/products'
import { orders } from './products/orders'
import { productsDetail } from './products/detail'
export default function* rootSaga() {
    yield all([
        products(),
        productsDetail(),
        orders()
    ])
}