import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { Cart } from "../components"
import { CartEmptyContainer, CartFullContainer } from "./index"

export const CartContainer = () => {
  const { cart } = useContext(GatsbyContext)

  return (
    <Cart>
      {cart.length > 0 ? <CartFullContainer /> : <CartEmptyContainer />}
    </Cart>
  )
}
