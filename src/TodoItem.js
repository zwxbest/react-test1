import React,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
          const {test,content}=this.props;
          //元素，属性，内容
        // return <div>item</div>,这样写比较简洁
          return React.createElement('div',{},'item')
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