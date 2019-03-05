import React from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

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
                          onClick={()=>{props.handleItemClick(index)}}>{item}</List.Item>)}
                />
            </div>
        )
};
export default TodoListUI;