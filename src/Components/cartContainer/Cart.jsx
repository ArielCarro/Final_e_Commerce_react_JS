
import Button from 'react-bootstrap/Button'
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
const Swal = require('sweetalert2')

const Cart = () => {
  const { cartList, clearCart } = useCartContext()
  let total = 0
  cartList.map(prod => { total = total + (prod.priceIva * prod.count)
  return total }
  )

  const generateOrder = async () => {
    const order = {}
    order.buyer = { name: 'Ariel', phone: '3442556895', email: 'ariel@gmail.com' }
    order.items = cartList.map(product => {
      return {
        id: product.id,
        name: product.name,
        quant: product.count,
        price: product.priceIva

      }
    })
    const timeElapsed = Date.now();
    const now = new Date(timeElapsed);
    now.toUTCString()
    order.date=now
    order.total = total
    console.log(order);

    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
      .then(resp =>
        Swal.fire({
          title: 'Compra Exitosa',
          text: `Su código de compra es: ${resp.id}`,
          icon: 'success',
          confirmButtonText: 'Entendido'
        }))
      .catch(err => console.log(err))
      .finally(clearCart)

      const queryCollectionStock = collection(db,'productos')
      const queryActualizarStock = query(queryCollectionStock, where(documentId(),"in",cartList.map(prod=>prod.id)))

      const batch=writeBatch(db)

    
      await getDocs(queryActualizarStock)
.then(res=>res.docs.forEach(res=>batch.update(res.ref,{
  stock:res.data().stock-cartList.find(prod=>prod.id===res.id).count
}))).catch(err=>console.log(err))
.finally(()=>clearCart)

batch.commit()

  }



  return (
      <div >
        {cartList.map(prod =>
          <CartItem prod={prod} key={prod.id} />
        )}
        <div className='underCart'>
          <span className='cartTotalPrice'>Precio Total: ${total}</span>
          <Button variant="success" onClick={generateOrder}>Finalizar Compra</Button>
          <Button variant="danger" onClick={clearCart}>Vaciar</Button>
        </div>
      </div>

  )
}

export default Cart



