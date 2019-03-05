import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import axios from 'axios';
import {initListAction} from './actionCreators'

function * todoSagas() {
   yield takeEvery(GET_INIT_LIST,getInitList);
}

function * getInitList() {
    const res = yield axios.get('http://47.92.161.49:3000/mock/11/api');
    const data = res.data;
    const action=initListAction(data);
    yield put(action);
}


export default todoSagas;