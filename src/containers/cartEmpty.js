import React from "react"
import { Cart } from "../components"
import { IoIosBasket } from "react-icons/io"

export const CartEmptyContainer = () => {
  return (
    <Cart.Empty>
      <Cart.BoxColumn height="100%">
        <Cart.BoxColumn>
          <Cart.Icon>
            <IoIosBasket />
          </Cart.Icon>
          <Cart.Text color="#aaacac">Votre panier est vide</Cart.Text>
        </Cart.BoxColumn>
        <Cart.Button>
          <Cart.Text>Finaliser la commande</Cart.Text>
        </Cart.Button>
      </Cart.BoxColumn>
    </Cart.Empty>
  )
}
