import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (count) =>{
    alert (`Se han añadido ${count} productos al carrito`)
  }
  
  return (
    <>
    <div className='greetingContainer'>{greeting}</div>
    <ItemCount init={1} stock={5} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer