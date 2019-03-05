import React,{Component} from 'react'
import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
    }


    render(){
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
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
};


//这个dispatch方法就是store.dispatch
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        }
    }
};

//让TodoList组件和store做连接,规则在mapStateToPros中,store的数据会映射到组件的props中,
// 如果对store的数据做修改,把store的dispatch方法挂载到props
export default connect(mapStateToPros,mapDispatchToProps)(TodoList);