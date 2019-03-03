import  React,{Component,Fragment} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import './style.css'

class App extends  Component{

    constructor(props){
        super(props);
        this.state={
            list: []
        }
        this.handleAddItem=this.handleAddItem.bind(this);
    }

    render(){
        return(
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                /*classNames对应style.css中的fade-enter的前缀*/
                                 <CSSTransition timeout={1000} classNames="fade" key={index}
                                           onEntered={(el)=>{el.style.color='blue'}} appear={true}>
                                {/*appear={true}一开始就有动画。加一个fade-apper和fade-appear-active*/}
                                <div >{item}</div>
                            </CSSTransition>

                            )
                        })
                    }
                </TransitionGroup>

            <button onClick={this.handleAddItem}></button>
            </Fragment>
        )
    }

    handleAddItem (){
        this.setState((preState )=>
            {
                return{
                    list: [...preState.list,'item']
                }
            }
        )
    }
}
export default  App;