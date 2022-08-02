import Button from 'react-bootstrap/Button'
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cartList, clearCart } = useCartContext()
  let total = 0
  cartList.map(prod => { total = total + (prod.priceIva * prod.count) }
  )
console.log(`cartList lenght ${cartList.length}`);
  
  //  const [cartListState, setCartListState] = useState(cartList);
  // const removeProd = (prod) => {
  //   let index = cartListState.indexOf(prod)
  //   cartList.splice(index, 1)
  //   setCartListState(cartList)
  //   console.log(cartListState)
  //   console.log(cartList);
  //   console.log(index);
  // }


  return (
    <div className='cartContainer'>{cartList.length>0?
      <div >
        {cartList.map(prod =>
          <CartItem prod={prod} key={prod.id} />
        )}
        <div className='underCart'>
          <span className='cartTotalPrice'>Precio Total: ${total}</span>
          <Button variant="success">Finalizar Compra</Button>
          <Button variant="danger" onClick={clearCart}>Vaciar</Button>
        </div>
      </div>
      : 
      <div className='emptyCart'>
        <h2 className='emptyCartTxt'>Carrito Vacio</h2>

        <Link to={`/`} className='emptyCartBtn'>
          <Button variant="success" className="countBtn">Volver al Catalogo</Button>
        </Link>
      </div>
      
    }</div>

  )
}

export default CartContainer