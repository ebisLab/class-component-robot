import React from 'react'

export default function SearchBox({onSearchChange}) {
  // console.log('searchbox')
  return (
    <div>
        <form>
        <input onChange={onSearchChange} type="search" placeholder='Search list'/>
        </form>
    </div>
  )
}
