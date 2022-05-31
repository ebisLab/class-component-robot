import React, {useState, useEffect} from 'react'

export default function SearchBox({onSearchChange}) {
    const [change, setChange] = useState();

    const handleSubmit=()=>{}
  return (
    <div>
        <form>
        <input onChange={onSearchChange} type="search" placeholder='Search list'/>
        </form>
    </div>
  )
}
