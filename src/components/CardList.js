import React from 'react'
import Card from './Card'

export default function CardList({data}) {

  return (
    <div>
        {data.map(item=> <Card key={item.id} name={item.name} />)}

    </div>
  )
}
