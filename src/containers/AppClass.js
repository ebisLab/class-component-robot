import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
import { connect } from 'react-redux'
import {setSearchField} from '../actions'

const mapStateToProps=state=>{
    return {
        searchField: state.searchField
        //from reducer
        // searchField: state.searchData.searchField
    }
}

const mapDispatchToProps=dispatch=>{
return {    onSearchChange: (event)=> dispatch(setSearchField(event.target.value))
}
}

class AppClass extends Component {
    constructor(){
        super() //calls constructor of component
        this.state={
            data: [], 
            // searchfield:''
        }
    }

    componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users=> this.setState({data:users}))
    }

  render() {
    const {data} = this.state
    const {searchField, onSearchChange} = this.props
    const filteredValues = data.filter(item=>{
        return item.name.toLowerCase().includes(searchField.toLowerCase())
    })
   return !data.length ? ( 'Loading ...'):
     (
      <div>
          <h1>With App class</h1>
          <SearchBox onSearchChange={onSearchChange} />
          <ErrorBoundary>
          <CardList data={filteredValues}/>
          </ErrorBoundary>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass)