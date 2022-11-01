import React, { useContext, useState } from "react"
import { CartContext } from "../context/cart-context"
import { Cart } from "../components"
import { CartBottomContainer, CartScrollContainer } from "./index"

export const CartFullContainer = () => {
  const [display, setDisplay] = useState(false)
  const { quantity, subTotal } = useContext(CartContext)

  const toggleDisplay = () => {
    setDisplay(display => !display)
  }

  return (
    <Cart.Full>
      <CartScrollContainer display={display} toggleDisplay={toggleDisplay} />
      <CartBottomContainer
        display={display}
        toggleDisplay={toggleDisplay}
        quantity={quantity}
        subTotal={subTotal}
      />
    </Cart.Full>
  )
}
