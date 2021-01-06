import { all } from 'redux-saga/effects'
import { login } from './login'
import { user } from './user'
import { products } from './modules/products/products'


export default function* rootSaga() {
    yield all([
        login(),
        user(),
        products()
    ])
}

