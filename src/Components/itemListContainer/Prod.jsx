import React from 'react'
import Card from 'react-bootstrap/card'
import ItemCount from './ItemCount'

const Prod = ({ prod }) => {
    const { name, priceIva, image, stock } = prod

    const added=false
    const detail=false

    return (
        <Card className="prodCard">
            <Card.Img variant="top" src={image} className="cardImg" />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTxt'>{name}</Card.Title>
                <Card.Text className='cardTxt'>
                   <p>Precio: ${priceIva}</p>    
                   <p>stock: {stock}</p> 
                </Card.Text>
                <ItemCount init={0} stock={stock}  prodId={prod.id} detial={detail} added={added}/>
            </Card.Body>
        </Card>
    )
}

export default Prod