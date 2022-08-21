import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])



export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({ children }) => {

const [cartList, setCartList] = useState([])



    const addToCart = (objProd) => {
        let test=0
        cartList.map((prod)=>{
            if(prod.id===objProd.id){
                prod.count=prod.count+objProd.count
                setCartList([...cartList]) 
                test=1
            }
            return null
        })
        test===0 && setCartList([...cartList, objProd])
        return null
    }

    const removeProd = (prod) => {
        let index = cartList.indexOf(prod)
        cartList.splice(index, 1)
        setCartList([...cartList])
      }

    const clearCart=()=>{
        setCartList([])
    }

    const cartItems=()=>{
        let totalItems=0
        cartList.map((prod)=>{
            totalItems+= prod.count
            return null
        })
        return totalItems
    }

    const cartTotal=()=>{
        let total = 0
        cartList.map(prod => {
            total = total + (prod.priceIva * prod.count)
            return total
        }
        )
        return total
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            removeProd,
            cartItems,
            cartTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider