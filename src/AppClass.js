import React, { Component } from 'react'
import SearchBox from './SearchBox'
import {data} from './data'
import CardList from './CardList'
export default class AppClass extends Component {
    constructor(){
        super() //calls constructor of component
        this.state={
            data: data, 
            searchfield:''
        }
    }

    onSearchChange = (event)=>{
        console.log(event);
        this.setState({searchfield: event.target.value}) //this.state.searchField
    }
  render() {
    const filteredValues = this.state.data.filter(item=>{
        return item.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
          <h1>With App class</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <CardList data={filteredValues}/>
      </div>
    )
  }
}
