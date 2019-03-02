import React,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //组件更新之前，也就是render之前执行
    shouldComponentUpdate(){
        console.log('rodoitem shouldComponentUpdate');
        return true;
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }

    render(){
        const {content}=this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }
    handleClick(){
        const {deleteItem,index} = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes={
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps={
    test: 'hello world'
}
export default TodoItem;