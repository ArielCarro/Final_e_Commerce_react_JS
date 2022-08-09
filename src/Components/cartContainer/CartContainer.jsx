import React from 'react'
import Cart from './Cart'
import CartForm from './CartForm'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



const CartContainer = () => {
  const { cartList} = useCartContext()
  return (
    <div className='cartContainer'>{cartList.length > 0 ?
      <div className='cartContainerOk'>
      <Cart></Cart>
      <CartForm></CartForm>
      </div>
      :
      <div className='emptyCart'>
      <h2 className='emptyCartTxt'>Carrito Vacio</h2>

      <Link to={`/`} className='emptyCartBtn'>
        <Button variant="success" className="countBtn">Volver al Catalogo</Button>
      </Link>

    </div>
}
    </div>







  )
}

export default CartContainer