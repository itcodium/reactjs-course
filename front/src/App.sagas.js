import { all } from 'redux-saga/effects';
import { products, productsDetail, orders} from './modules/e-commerce/index';

import { login } from './modules/authentication/index';
import { user, menu } from './modules/admin/index';

export default function* rootSaga() {
    yield all([
        products(),productsDetail(), orders(), 
        login(),
        user(),
        menu(),
    ])
}