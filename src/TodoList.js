import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

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
            <ul ref={(ul)=>{this.ul=ul}}>
                {this.getTodoItem()}
            </ul>
        </Fragment>

    );
  }

  componentDidMount(){
        axios.get('http://47.92.161.49:3000/mock/11/api')
            .then(res=>{
                this.setState(()=>{
                    return {
                        list: [...res.data]
                    }
                })
            })
  }

  handleButtonClick(e){
        this.setState((preState)=>({
            //展开运算符
            list: [...preState.list,preState.inputValue],
            inputValue: ''
        }));

  }
    handleInputChange(e ){
        const value = e.target.value;
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
