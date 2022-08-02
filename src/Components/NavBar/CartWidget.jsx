import React from 'react'
import cart from '../../img/cart.svg'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { cartLength } = useCartContext()

  return (
    <div className='cartWidget'>
      <span className='cartTxtWidget'>{cartLength()>0 && cartLength()}</span> 
      <Link to={'/cart'}>
         <img src={cart} className='cartImgWidget' alt='cart image'/>     
      </Link>                 

    </div>
  )
}

export default CartWidget