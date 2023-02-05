import React, { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { Cart } from "../components"
// import { CartEmptyContainer, CartFullContainer } from "./index"
import {
  CartBottomContainer,
  CartEmptyContainer,
  CartFullContainer,
} from "./index"

export const CartContainer = ({ title }) => {
  const { quantity } = useContext(CartContext)

  return (
    <Cart>
      {quantity > 0 ? (
        <CartFullContainer title={title} />
      ) : (
        <CartEmptyContainer />
      )}
    </Cart>
  )
}
