import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Cart } from "../components"
import { formatPrice } from "../utils/helpers"

export const CartBottomContainer = ({
  display,
  offered,
  restToOffer,
  toggleDisplay,
  quantity,
  subTotal,
  title,
}) => {
  // console.log(title)

  return (
    <Cart.Bottom>
      <Cart.BoxLargeScreen>
        <Cart.Alert offered={offered} restToOffer={restToOffer} />
        <Link to="/checkout" state={{ title }}>
          <Cart.Button active>
            <Cart.Text>Finaliser la commande</Cart.Text>
          </Cart.Button>
        </Link>
      </Cart.BoxLargeScreen>
      <Cart.BoxLittleScreen>
        {display ? (
          <Link to={`/checkout/${title}`}>
            <Cart.Button active>
              <Cart.Text>Finaliser la commande</Cart.Text>
            </Cart.Button>
          </Link>
        ) : (
          <Fragment>
            <Cart.Alert offered={offered} restToOffer={restToOffer} />
            <Cart.Button active j_c="space-between" onClick={toggleDisplay}>
              <Cart.Text bg_clr="	#17bdae">{quantity}</Cart.Text>
              <Cart.Text>Voir panier</Cart.Text>
              <Cart.Text>{formatPrice(subTotal)}</Cart.Text>
            </Cart.Button>
          </Fragment>
        )}
      </Cart.BoxLittleScreen>
    </Cart.Bottom>
  )
}
