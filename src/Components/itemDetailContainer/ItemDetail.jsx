import React from 'react'
import ProdDetail from './ProdDetail'


const ItemDetail = ({prods , productId}) => {

    const prod=prods[productId-1]
    console.log(prod)

  return (
    <div className='detailView' >{prod===undefined? "Cargando..." : <ProdDetail prod={prod}/>}</div>
  )
}

export default ItemDetail