import React,{Component,Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputValue: '',
            list:[]
        }
    }
  render() {
    return (
        <Fragment>
            <div>
                {/*
                  多行
                  注释
                  */}
                <label htmlFor="insertArea" >输入内容</label>
                <input id="insertArea" className='input' value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleButtonClick.bind(this)}>提交</button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <TodoItem/>
                    })
                }
            </ul>
        </Fragment>
    );
  }

  handleButtonClick(e){
        this.setState({
            //展开运算符
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
  }
    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemDelete(index){
        //immutable react原则尽量不变，虽然这个也可以
        const list =[...this.state.list]
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}


export default TodoList;
