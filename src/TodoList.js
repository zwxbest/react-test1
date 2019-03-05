import React,{Component} from 'react'
import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component{

    constructor(pros){
        super(pros);
        this.state = store.getState();
    }


    render(){
        return (
            <div>
                <div>
                    <input value={this.state.inputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>sb</li>
                </ul>
            </div>

        )
    }
}

const mapStateToPros = (state)=>{
    return {
        inputValue: state.inputValue
    }
}

//让TodoList组件和store做连接,规则在mapStateToPros中
export default connect(mapStateToPros,null)(TodoList);