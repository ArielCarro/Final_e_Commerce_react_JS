import React from 'react'
import Card from 'react-bootstrap/card'
import ItemCount from './../itemListContainer/ItemCount'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

const ProdDetail = ({ prod }) => {
  const { name, priceIva, imagen, stock } = prod

  const [added,setAdded]=useState(false)
  const {addToCart,cartList}=useCartContext()

  const onAdd = (count) => {
    alert(`Se han añadido ${count} productos al carrito`)
    setAdded(true)
    addToCart({...prod,count })

}
    console.log(cartList);

  const detail=true
  console.log(name)
  return (
    <div className="prodDetailCard">
      <img src={imagen} className="detailCardImg" alt='Product' />
      <div className='detailCardBody'>
        <div>
          <Card.Title className='cardTxt'>{name}</Card.Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in eos, hic cum quisquam libero nulla at porro sed, soluta minus aperiam! Beatae illo modi laudantium atque, sapiente veritatis ducimus.</p>
        </div>
        <Card.Text className='cardTxt'>
          <p>Precio: ${priceIva}</p>
          <p>stock: {stock}</p>
        </Card.Text>
        <ItemCount init={1} stock={stock} prodId={prod.id} detail={detail} onAdd={onAdd} added={added} />
      </div>
    </div>
  )
}

export default ProdDetail