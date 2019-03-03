import  React,{Component,Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css'

class App extends  Component{

    constructor(props){
        super(props);
        this.state={
            show: true
        }
        this.handleToggle=this.handleToggle.bind(this);
    }

    render(){
        return(
            <Fragment>
                {/*classNames对应style.css中的fade-enter的前缀*/}
                <CSSTransition in={this.state.show} timeout={1000} classNames="fade"
                onEntered={(el)=>{el.style.color='blue'}}>
                    <div>hello</div>
                </CSSTransition>
            <button onClick={this.handleToggle}></button>
            </Fragment>
        )
    }

    handleToggle(){
        this.setState(
            {
                show: !this.state.show
            }
        )
    }
}
export default  App;