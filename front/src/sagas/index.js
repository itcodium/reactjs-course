import { all } from 'redux-saga/effects'
import { helloSaga } from './hello'
import { watchIncrementAsync } from './watchIncrementAsync'
import { recipes, helloRecipes } from './recipes'
import { login } from './login'


export default function* rootSaga() {
    yield all([
        recipes(),
        login(),
        helloSaga(),
        watchIncrementAsync(),
        helloRecipes()
    ])
}

