import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import axios from 'axios';
import {initListAction} from './actionCreators'

function * todoSagas() {
   yield takeEvery(GET_INIT_LIST,getInitList);
}

function * getInitList() {
    try {
        const res = yield axios.get('http://47.92.161.49:8080/login222');
        const data = res.data;
        const action=initListAction(data);
        yield put(action);
    }catch(e){
        console.log("请求失败");
    }

}


export default todoSagas;