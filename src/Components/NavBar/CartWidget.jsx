import React from 'react'
import cart from '../../img/cart.svg'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { cartItems } = useCartContext()

  return (
    <div className='cartWidget'>
      <span className='cartTxtWidget'>{cartItems()>0 && cartItems()}</span> 
      <Link to={'/cart'}>
         <img src={cart} className='cartImgWidget' alt='cart icon'/>     
      </Link>                 

    </div>
  )
}

export default CartWidget