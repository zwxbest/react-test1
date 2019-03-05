import {takeEvery} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";

function * todoSagas() {
   yield takeEvery(GET_INIT_LIST,getInitList);
}

function * getInitList() {
    console.log('abc')
}


export default todoSagas;