import React from 'react'
import Prod from './Prod'

const ItemsList = ({prods}) => {
  return (
    <div className="catalogStyle">
        {prods.map((prod) => <Prod prod={prod} key={prod.id}/>)}
    </div>
  )
}

export default ItemsList