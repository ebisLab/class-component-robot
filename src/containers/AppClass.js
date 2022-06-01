import React, { useEffect, useState } from 'react'
import  {connect} from 'react-redux'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
import {setSearchField} from '../actions'

const AppClass =(props)=> {
    const [data, setData]= useState([]);
    const [searchfield, setSearchField] =useState('')
    const [count, setCount] = useState(0)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users=> setData(users))
    }, [count, props])
    
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
          <button onClick={()=>setCount(1+count)}>Click Me</button>
          {count}
          <ErrorBoundary>
          <CardList data={filteredValues}/>
          </ErrorBoundary>
      </div>
    )
  }

  export default AppClass
