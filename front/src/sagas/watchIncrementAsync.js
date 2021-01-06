
import { put, call, takeEvery } from 'redux-saga/effects'
import RECIPES from '../redux/types/recipes';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: RECIPES.FETCH })
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

