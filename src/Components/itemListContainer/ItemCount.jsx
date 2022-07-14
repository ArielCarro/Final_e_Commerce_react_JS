import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import './itemListContainer.css';

const ItemCount = ({ init, stock, onAdd }) => {

    const [count, setCounter] = useState(init)

    const incre = () => {
        count < stock ? setCounter(count + 1) : alert("Ha alcanzado el stock máximo")
    }

    const decre = () => {
        count > init ? setCounter(count - 1) : alert(`La cantidad no puede ser menor que ${init}`)
    }

    const reset = () => {
        setCounter(init)
    }


    return (
        <div className='counterComp'>
            <p>
                Cantidad en Carrito: {count}
            </p>
            <div>
                <Button variant="primary" onClick={incre} className="countBtn">+</Button>
                <Button variant="primary" onClick={decre} className="countBtn">-</Button>
                <Button variant="primary" onClick={reset} className="countBtn">Reset</Button>
                <Button variant="primary" onClick={null} className="countBtn">Ver detalle</Button>
            </div>

        </div>
    )
}

export default ItemCount