
import { call, put, takeLatest } from 'redux-saga/effects'
import RECIPES from '../redux/types/recipes';
import apiCall from '../redux/api';
// https://github.com/baluragala/redux-saga-examples

const apiUrl = `./data/recipes.json`;

function* fetchRecipes() {
    try {
        yield put({ type: RECIPES.PENDING });
        const results = yield call(apiCall, apiUrl);
        yield put({ type: RECIPES.SUCCESS, payload: results });
    } catch (e) {
        yield put({ type: RECIPES.ERROR, message: e.message });
    }
}

export function* recipes() {
    yield takeLatest(RECIPES.FETCH, fetchRecipes);
}

export function* helloRecipes() {
    yield console.log('Hello Recipes! II V')
}