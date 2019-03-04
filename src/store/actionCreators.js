import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
import axios from "axios/index";

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddToDoItemAction = ()=>({
        type:ADD_TODO_ITEM
    }
);

export  const getDeleteToDoItemAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
});

export  const initListAction=(data)=>({
        type: INIT_LIST_ACTION,
        data
    }
);

export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get('http://47.92.161.49:3000/mock/11/api').then((res)=>{
            const data=res.data;
            const action=initListAction(data);
            dispatch(action);
        })
    }
};