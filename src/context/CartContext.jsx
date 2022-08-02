import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])



export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({ children }) => {

const [cartList, setCartList] = useState([])



    const addToCart = (objProd) => {
        let test=0
        cartList.map((prod)=>{
            if(prod.id==objProd.id){
                prod.count=prod.count+objProd.count
                setCartList(cartList) 
                test=1
            }
        })
        test==0 && setCartList([...cartList, objProd])
    }

    const removeProd = (prod) => {
        let index = cartList.indexOf(prod)
        cartList.splice(index, 1)
        setCartList([...cartList])
      }

    const clearCart=()=>{
        setCartList([])
    }

    const cartLength=()=>{
        return cartList.length
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            removeProd,
            cartLength,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider