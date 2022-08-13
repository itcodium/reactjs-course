import { all } from 'redux-saga/effects';
import { products, productsDetail, orders} from './modules/e-commerce/index';

export default function* rootSaga() {
    yield all([
        products(),productsDetail(), orders()
    ])
}