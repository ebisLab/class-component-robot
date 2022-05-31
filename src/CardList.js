import React from 'react'
import Card from './Card'

export default function CardList({data},filteredValues) {
    console.log('data', data)

  return (
    <div>
        {data.map(item=> <Card title={item.title} />)}

{/* {this.state.data.map(item=> <Card key={item.id}/>)} */}
    </div>
  )
}
