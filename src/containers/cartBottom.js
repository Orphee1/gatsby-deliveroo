import React from "react"
import { Cart } from "../components"
import { formatPrice } from "../utils/helpers"

export const CartBottomContainer = ({
  display,
  toggleDisplay,
  quantity,
  subTotal,
}) => {
  return (
    <Cart.Bottom>
      <Cart.BoxLargeScreen>
        <Cart.Button active>
          <Cart.Text>Finaliser la commande</Cart.Text>
        </Cart.Button>
      </Cart.BoxLargeScreen>
      <Cart.BoxLittleScreen>
        {display ? (
          <Cart.Button active>
            <Cart.Text>Finaliser la commande</Cart.Text>
          </Cart.Button>
        ) : (
          <Cart.Button active j_c="space-between" onClick={toggleDisplay}>
            <Cart.Text bg_clr="	#17bdae">{quantity}</Cart.Text>
            <Cart.Text>Voir panier</Cart.Text>
            <Cart.Text>{formatPrice(subTotal)}</Cart.Text>
          </Cart.Button>
        )}
      </Cart.BoxLittleScreen>
    </Cart.Bottom>
  )
}
