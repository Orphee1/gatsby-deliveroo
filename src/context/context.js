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
        newCart[i].quantity = newCart[i].quantity + 1
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

  return (
    <GatsbyContext.Provider value={{ product, setProduct, addProduct }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
