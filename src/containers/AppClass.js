import React, { useEffect, useState } from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
const AppClass =()=> {
    const [data, setData]= useState([]);
    const [searchfield, setSearchField] =useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users=> setData(users))
    }, [])
    
    const onSearchChange = (event)=>{
        setSearchField(event.target.value) //this.state.searchField
    }

    const filteredValues = data.filter(item=>{
        return item.name.toLowerCase().includes(searchfield.toLowerCase())
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

  export default AppClass
