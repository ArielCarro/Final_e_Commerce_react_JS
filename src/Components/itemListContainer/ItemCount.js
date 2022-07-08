import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/card'
import { useState } from "react"
import './itemListCointainer.css';

const ItemCount = ({ init, stock, onAdd }) => {

    const [count, setCounter] = useState(init)

    const incre = () => {
        count < stock ? setCounter(count + 1) : alert("Ha alcanzado el stock máximo")
    }

    const decre = () => {
        count > init ? setCounter(count - 1) : alert("La cantidad no puede ser menor que uno")
    }

    const reset = () => {
        setCounter(init)
    }


    return (
        <div className="cardContainer">
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title>{count}</Card.Title>
                    <Button variant="primary" onClick={incre} className="countBtn">+</Button>
                    <Button variant="primary" onClick={decre} className="countBtn">-</Button>
                    <Button variant="primary" onClick={reset} className="countBtn">Reset</Button>
                    <Button variant="primary" onClick={() => stock==0? alert("No hay stock disponible") :() => onAdd(count)} className="countBtn">Add Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount