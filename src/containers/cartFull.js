import React, { useContext, useState } from "react"
import { GatsbyContext } from "../context/context"
import { Cart } from "../components"
import { CartBottomContainer, CartScrollContainer } from "./index"

export const CartFullContainer = () => {
  const [display, setDisplay] = useState(false)
  const { cart, subTotal } = useContext(GatsbyContext)

  const toggleDisplay = () => {
    setDisplay(display => !display)
  }

  console.log(cart)

  return (
    <Cart.Full>
      <CartScrollContainer display={display} toggleDisplay={toggleDisplay} />
      <CartBottomContainer
        display={display}
        toggleDisplay={toggleDisplay}
        cart={cart}
        subTotal={subTotal}
      />
    </Cart.Full>
  )
}
