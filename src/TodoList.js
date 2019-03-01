import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem'
//最后引入样式
import './style.css'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputValue: '',
            list:[]
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
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
                onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>提交</button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <TodoItem content={item} index={index} deleteItem={this.handleItemDelete}/>
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
