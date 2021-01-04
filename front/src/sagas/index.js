import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './watchIncrementAsync'
import { recipes, helloRecipes } from './recipes'
import { login } from './login'
import { user } from './user'
import { products } from './modules/products/products'


export default function* rootSaga() {
    yield all([
        recipes(),
        login(),
        user(),
        watchIncrementAsync(),
        helloRecipes(),
        products()
    ])
}

