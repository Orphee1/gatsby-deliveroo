import React, { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { Cart } from "../components"
import { CartEmptyContainer, CartFullContainer } from "./index"

export const CartContainer = () => {
  const { quantity } = useContext(CartContext)

  return (
    <Cart>{quantity > 0 ? <CartFullContainer /> : <CartEmptyContainer />}</Cart>
  )
}
