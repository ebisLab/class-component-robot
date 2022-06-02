import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
import { connect } from 'react-redux'
import {setSearchField, requestData} from '../actions'
// import { requestData } from '../reducers'

const mapStateToProps=state=>{
    return {
        // searchField: state.searchField   //if we want to target only searchField reducer
        //from reducer
        searchField: state.searchData.searchField,//without combineReducer and only targeting searchData reducer,
        data: state.requestData.data,
        isPending: state.requestData.isPending,
        error: state.requestData.error
    }
}

const mapDispatchToProps=dispatch=>{
return {    
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
            //requestdata action replaces componentdidmount request
            onRequestData: ()=> dispatch(requestData())//wewant to return a function from it -- specifically reducer/action has dispatch method

}
}

class AppClass extends Component {
//constructor is removed because there are no more states, they are passed as states

    componentDidMount(){
        this.props.onRequestData()
    }

  render() {
    const {searchField, onSearchChange, data, isPending} = this.props
    const filteredValues = data.filter(item=>{
        return item.name.toLowerCase().includes(searchField.toLowerCase())
    })
   return isPending ? ( 'Loading ...'):
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