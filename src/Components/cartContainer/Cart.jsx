
import Button from 'react-bootstrap/Button'
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, clearCart, cartTotal } = useCartContext()
  let total=cartTotal()
  return (
    <div >
      {cartList.map(prod =>
        <CartItem prod={prod} key={prod.id} />
      )}
      <div className='underCart'>
        <span className='cartTotalPrice'>Precio Total: ${total}</span>
        <Link to={`/cart/form`}>
          <Button variant="success" className='cartBuyBtn'>Continuar Compra</Button>
        </Link>
        <Button variant="danger" onClick={clearCart}>Vaciar</Button>
      </div>
    </div>

  )
}

export default Cart



