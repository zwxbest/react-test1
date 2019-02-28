import React,{Component,Fragment} from 'react';

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
                <input value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleButtonClick.bind(this)}>提交</button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
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
        console.log(index);
    }
}


export default TodoList;
