import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import { Link } from 'react-router-dom';

const ItemCount = ({ init, stock, onAdd, prodId, detail }) => {

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
                {detail ?
                    <Link to={`/`}>
                        <Button variant="primary" className="countBtn">Volver</Button>
                    </Link>
                    :
                    <Link to={`/item/${prodId}`}>
                        <Button variant="primary" className="countBtn">Ver detalle</Button>
                    </Link>
                }

            </div>

        </div>
    )
}

export default ItemCount