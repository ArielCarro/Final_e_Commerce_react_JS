import React from 'react'
import ProdDetail from './ProdDetail'
import Spinner from 'react-bootstrap/Spinner';


const ItemDetail = ({prods , productId}) => {

    const prod=prods[productId-1]
    console.log(prod)

  return (
    <div className='detailView' >{prod===undefined? <Spinner animation="border" variant="dark" /> : <ProdDetail prod={prod}/>}</div>

    

  )
}

export default ItemDetail