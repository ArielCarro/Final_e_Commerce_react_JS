import React from 'react'
import cart from '../../img/cart.svg'

const CartWidget = () => {
  return (
    <div>
        <img src={cart} className='cartWidget' alt=''/>
    </div>
  )
}

export default CartWidget