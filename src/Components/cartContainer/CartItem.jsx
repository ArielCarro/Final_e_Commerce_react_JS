import React from 'react'
import { Card } from 'react-bootstrap'
import './cartContainer.css'
import bin from '../../img/bin.svg'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({ prod}) => {

    const {removeProd} = useCartContext()

    const { name, priceIva, imagen, count } = prod



    return (
        <Card className="cartProd">
            <Card.Img variant="top" src={imagen} className="cartCardImg" />
            <Card.Title className='cartCardTxt'>{name}</Card.Title>
            <Card.Body className='cartCardBody'>
                <p>Cantidad: {count}</p>
                <p>Precio: ${priceIva * count}</p>
                <img src={bin} onClick={()=>{removeProd(prod)}} className='cartBin' />
            </Card.Body>
        </Card>
    )
}

export default CartItem