
//state整个图书馆所有书籍信息
const defaultState={
    inputValue: '123',
    list:[1,2,3]
};
//reducer可以接收state，但绝不能修改state
export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        //深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==='add_todo_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        console.log(newState);
        return newState;
    }
    return state;
}
