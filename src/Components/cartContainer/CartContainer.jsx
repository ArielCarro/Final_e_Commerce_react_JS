import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
  const{cartList,clearCart}=useCartContext()

  return (
    <div>
      {cartList.map(prod => 
      <li>{prod.name}{prod.count}</li>
      )}
      <button onClick={clearCart}>Vaciar</button>
    </div>
  )
}

export default CartContainer