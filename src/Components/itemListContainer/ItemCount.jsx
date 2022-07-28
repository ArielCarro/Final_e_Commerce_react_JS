import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemCount = ({ init, stock, prodId, detail, onAdd, added }) => {

    const [count, setCounter] = useState(init)


    const incre = () => {
        count < stock ? setCounter(count + 1) : alert("Ha alcanzado el stock máximo")
    }

    const decre = () => {
        count > init ? setCounter(count - 1) : alert(`La cantidad no puede ser menor que ${init}`)
    }

    return (
        <div className='counterComp'>
            <p>
                Cantidad en Carrito: {count}
            </p>
            {detail ?
                <div>
                    <Button variant="primary" onClick={decre} className="countBtn">-</Button>
                    <Button variant="primary" onClick={incre} className="countBtn">+</Button>
                    <Link to={`/`}>
                        <Button variant="primary" className="countBtn">Volver</Button>
                    </Link>
                    {added ?
                        <Link to={`/cart`}>
                            <Button variant="primary" className="countBtn">Ir al carrito</Button>
                        </Link>
                        :
                        <Button variant="primary" className="countBtn" onClick={() => (onAdd(count))}>Agregar al carrito</Button>
                    }
                </div>
                :
                <Link to={`/item/${prodId}`}>
                    <Button variant="primary" className="countBtn">Ver detalle</Button>
                </Link>
            }



        </div>
    )
}

export default ItemCount