import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes'

//state整个图书馆所有书籍信息
const defaultState={
    inputValue: '',
    list:[]
};
//reducer可以接收state，但绝不能修改state
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        //深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        console.log(newState);
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
