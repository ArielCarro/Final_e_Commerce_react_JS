import Card from 'react-bootstrap/card'
import React from 'react'
import ItemCount from './ItemCount'

const Prod = ({ prod }) => {
    const { name, priceIva, imagen, stock } = prod
    console.log(imagen)
    const onAdd = (count) =>{
        alert (`Se han añadido ${count} productos al carrito`)
      }
    return (
        <Card className="prodCard">
            <Card.Img variant="top" src={imagen} className="cardImg" />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTxt'>{name}</Card.Title>
                <Card.Text className='cardTxt'>
                   <p>Precio: ${priceIva}</p>    
                   <p>stock: {stock}</p> 
                </Card.Text>
                <ItemCount init={0} stock={stock} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    )
}

export default Prod