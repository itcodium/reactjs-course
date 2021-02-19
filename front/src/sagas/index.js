import { all } from 'redux-saga/effects'
import { login } from './login'
import { user } from './user'
import { products } from './modules/products/products'
import { menu } from './modules/menu/menu'
import { modules } from './modules/admin/modules'
import { perfil } from './modules/admin/perfil'

export default function* rootSaga() {
    yield all([
        login(),
        user(),
        products(),
        menu(),
        modules(),
        perfil()
    ])
}