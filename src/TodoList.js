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
                       ref={(input)=>{this.input = input}}
                onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>提交</button>
            </div>
            <ul ref={(ul)=>{this.ul=ul}}>
                {this.getTodoItem()}
            </ul>
        </Fragment>

    );
  }

  handleButtonClick(e){
        this.setState((preState)=>({
            //展开运算符
            list: [...preState.list,preState.inputValue],
            inputValue: ''
        }));
        console.log(this.ul.querySelectorAll('div').length);
  }
    handleInputChange( ){
        const value = this.input.value;
        this.setState(()=>({
            inputValue: value
        }))
    }

    handleItemDelete(index){
        //immutable react原则尽量不变，虽然这个也可以
        this.setState((preState)=>{
            const list =[...preState.list];
            list.splice(index,1);
            return {list}
        })
    }

    getTodoItem(){
       return this.state.list.map((item,index)=>{
            return <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
        })
    }
}

export default TodoList;
