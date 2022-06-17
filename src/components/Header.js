import React, { Component } from 'react'
import CounterBtn from './CounterBtn';

export default class Header extends Component {
constructor(){
  super()
  this.state={
    count: 0
  }
}
shouldComponentUpdate(nextprops, nextstate){
  return false;
}
  render() {
      // console.log('header')
    return (
      <>
      <div>small component part</div>
      <CounterBtn color={'red'} />
      </>
    )
  }
}

