import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
export default class AppClass extends Component {
    constructor(){
        super() //calls constructor of component
        this.state={
            data: [], 
            searchfield:''
        }
    }

    componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users=> this.setState({data:users}))
    }

    onSearchChange = (event)=>{
        console.log(event);
        this.setState({searchfield: event.target.value}) //this.state.searchField
    }
  render() {
    const {data, searchfield} = this.state
    const filteredValues = data.filter(item=>{
        return item.name.toLowerCase().includes(searchfield.toLowerCase())
    })
   return !data.length ? ( 'Loading ...'):
     (
      <div>
          <h1>With App class</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <ErrorBoundary>
          <CardList data={filteredValues}/>
          </ErrorBoundary>
      </div>
    )
  }
}
