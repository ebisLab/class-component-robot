import React from 'react'

export default function SearchBox({onSearchChange}) {
  return (
    <div>
        <form>
        <input onChange={onSearchChange} type="search" placeholder='Search list'/>
        </form>
    </div>
  )
}
