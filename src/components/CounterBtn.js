import React, { Component } from 'react'

export default class CounterBtn extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }
    }

    shouldComponentUpdate(nextprops, nextstate){
        console.log(nextprops, nextstate)
        if (this.state.count !== nextstate.count){
            return true
        }
        return false;
      }

    updateCount=()=>{
        // this.setState({count: this.state.count +1}) //unintentional sideeffects
        this.setState(state =>{ //better way of updating state
            return {count: state.count +1}
        })

    }
  render() {
      console.log('countr btn')
    return (
      <button color={this.props.color} onClick={this.updateCount}>click {this.state.count} </button>
    )
  }
}
