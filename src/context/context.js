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
      result = result + cart[i].price * cart[i].quantity
    }

    return result
  }

  const calculQuantity = () => {
    let result = 0
    for (let i = 0; i < cart.length; i++) {
      result = result + cart[i].quantity
    }
    return result
  }

  let quantity = calculQuantity() // required by cart on mobile device
  let subTotal = calculSubTotal()
  let deliveryFee = 1.99
  let serviceFee = 0.2

  return (
    <GatsbyContext.Provider
      value={{
        addProduct,
        cart,
        deliveryFee,
        product,
        quantity,
        removeProduct,
        serviceFee,
        setCart,
        setProduct,
        subTotal,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
