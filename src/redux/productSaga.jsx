import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'
import data from "../Data.json"

function* getProducts() {
    yield put({ type: SET_PRODUCT_LIST,  data })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;