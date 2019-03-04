import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginLeft: '10px', marginTop: '10px'}}>
                <div>
                    <Input value={this.props.inputValue} placeholder="todo info"
                           style={{width: '300px', marginRight: '10px'}}
                           onChange={this.props.handleInputChange}/>
                    <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
                </div>
                <List style={{marginTop: '10px', width: '300px'}}
                      bordered
                      dataSource={this.props.list}
                      renderItem={(item, index) => (<List.Item
                          onClick={(index)=>{this.props.handleItemClick(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoListUI;