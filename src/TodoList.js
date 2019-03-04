import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store/'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render(){
        return(
            <div style={{marginLeft:'10px',marginTop:'10px'}}>
                <div>
                    <Input value={this.state.inputValue} placeholder="todo info" style={{width:'300px',marginRight:'10px'}}
                     onChange={this.handleInputChange}/>
                    <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>
                <List style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

     handleInputChange(e){
        console.log(e.target.value);
        const action={
            type:'change_input_value',
            value:e.target.value
        };
        //传递给store
        store.dispatch(action);
    }
     handleButtonClick(){
        const action={
            type:'add_todo_item'
        };
        store.dispatch(action);
    }
}
export default TodoList;