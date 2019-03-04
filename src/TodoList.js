import React, {Component} from 'react'
import store from './store/'
import {getInputChangeAction,getAddToDoItemAction,getDeleteToDoItemAction,getTodoList}  from "./store/actionCreators";
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return <TodoListUI inputValue={this.state.inputValue} handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick} list={this.state.list}
                           handleItemClick={this.handleItemClick}/>
    }

    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleItemClick(index) {
        const action = getDeleteToDoItemAction(index);
        store.dispatch(action);
    }

    handleInputChange(e) {
        const  action = getInputChangeAction(e.target.value);
        //传递给store
        store.dispatch(action);
    }

    handleButtonClick() {
    const action= getAddToDoItemAction();
    store.dispatch(action);
    }
}

export default TodoList;