import React, { useState } from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [product, setProduct] = useState({})
  const [cart, setCart] = useState([])
  console.log(cart)
  const addProduct = product => {
    const newCart = [...cart]
    let isFound = false
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === product.id) {
        newCart[i].quantity += 1
        isFound = true
        setCart(newCart)
        break
      }
    }
    if (isFound === false) {
      product.quantity = 1
      newCart.push(product)
      setCart(newCart)
    }
  }

  const removeProduct = product => {
    const newCart = [...cart]
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === product.id) {
        newCart[i].quantity -= 1
        if (newCart[i].quantity === 0) {
          console.log("empty")
          newCart.splice(i, 1)
        }
      }
      setCart(newCart)
    }
  }

  const calculSubTotal = () => {
    let result = 0
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 0) {
        return 0
      }
      result = result + cart[i].price * cart[i].quantity
    }
    return result
  }

  //   let subTotal = calculSubTotal()

  return (
    <GatsbyContext.Provider
      value={{
        calculSubTotal,
        product,
        setProduct,
        addProduct,
        removeProduct,
        // subTotal,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
