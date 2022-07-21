import React from 'react'
import Card from 'react-bootstrap/card'
import ItemCount from './../itemListContainer/ItemCount'

const ProdDetail = ({ prod }) => {

  const { name, priceIva, imagen, stock } = prod
  const detail=true
  console.log(name)
  const onAdd = (count) => {
    alert(`Se han añadido ${count} productos al carrito`)
    
  }
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
        <ItemCount init={0} stock={stock} onAdd={onAdd} prodId={prod.id} detail={detail} />
      </div>
    </div>
  )
}

export default ProdDetail