import { all } from 'redux-saga/effects'
import { helloSaga } from './hello'
import { watchIncrementAsync } from './watchIncrementAsync'
import { recipes, helloRecipes } from './recipes'
import { login } from './login'
import { user } from './user'


export default function* rootSaga() {
    yield all([
        recipes(),
        login(),
        user(),
        helloSaga(),
        watchIncrementAsync(),
        helloRecipes()
    ])
}

