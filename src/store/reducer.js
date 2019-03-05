//纯函数

const defaultState = {
    inputValue: 'hello world',
    list: []
};
export default (state = defaultState,action)=>{
    return state;
};