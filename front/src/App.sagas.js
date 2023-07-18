import { all } from 'redux-saga/effects';

import { login } from './modules/authentication/index';
import { products, productsDetail, orders} from './modules/e-commerce/index';
import { user, menu, userPrivileges } from './modules/admin/index';
import { flickr } from './modules/flickr';

export default function* rootSaga() {
    yield all([
        products(),productsDetail(), orders(), 
        login(),
        user(), menu(), userPrivileges(),
        flickr()
    ])
}