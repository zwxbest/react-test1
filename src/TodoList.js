import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store/'
import {getInputChangeAction,getAddToDoItemAction,getDeleteToDoItemAction}  from "./store/actionCreators";

const TodoListUI =  (props)=>{
        return (
            <div style={{marginLeft: '10px', marginTop: '10px'}}>
                <div>
                    <Input value={props.inputValue} placeholder="todo info"
                           style={{width: '300px', marginRight: '10px'}}
                           onChange={props.handleInputChange}/>
                    <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
                </div>
                <List style={{marginTop: '10px', width: '300px'}}
                      bordered
                      dataSource={props.list}
                      renderItem={(item, index) => (<List.Item
                          onClick={(index)=>{props.handleItemClick(index)}}>{item}</List.Item>)}
                />
            </div>
        )
};

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