import React, { useContext, useState } from "react"
import { GatsbyContext } from "../context/context"
import { Cart } from "../components"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { formatPrice } from "../utils/helpers"

export const CartScrollContainer = ({ display, toggleDisplay }) => {
  const [tips, setTips] = useState(0)
  const globalData = useContext(GatsbyContext)
  const {
    additionalFee,
    addProduct,
    cart,
    deliveryFee,
    quantity,
    removeProduct,
    serviceFee,
    subTotal,
  } = globalData

  const total = subTotal + deliveryFee + serviceFee + tips

  return (
    <Cart.Scroll display={`${display ? "flex" : "none"}`}>
      <Cart.BoxLittleScreen>
        <Cart.ButtonClose onClick={toggleDisplay}>
          <MdClose />
        </Cart.ButtonClose>
      </Cart.BoxLittleScreen>
      <Cart.Title>Votre commande</Cart.Title>
      {cart.map(({ id, price, quantity, title }) => {
        return (
          <Cart.BoxItem key={id}>
            <Cart.Text>{title}</Cart.Text>
            <Cart.Text>{formatPrice(price)}</Cart.Text>
          </Cart.BoxItem>
        )
      })}
      <Cart.Line />
      <Cart.BoxItem>
        <Cart.Text>Sous-total</Cart.Text>
        <Cart.Text>{formatPrice(subTotal)}</Cart.Text>
      </Cart.BoxItem>
      <Cart.BoxItem>
        <Cart.Text>Frais additionnels</Cart.Text>
        <Cart.Box>
          <AiOutlineExclamationCircle />
          <Cart.Text>{formatPrice(additionalFee)}</Cart.Text>
        </Cart.Box>
      </Cart.BoxItem>
      <Cart.BoxItem>
        <Cart.Text>Frais de livraison</Cart.Text>
        <Cart.Box>
          <AiOutlineExclamationCircle />
          <Cart.Text>{formatPrice(deliveryFee)}</Cart.Text>
        </Cart.Box>
      </Cart.BoxItem>
      <Cart.BoxItem>
        <Cart.Text>Frais de service</Cart.Text>
        <Cart.Box>
          <AiOutlineExclamationCircle />
          <Cart.Text>{formatPrice(serviceFee)}</Cart.Text>
        </Cart.Box>
      </Cart.BoxItem>
      <Cart.Line />
      <Cart.BoxItem>
        <Cart.Text>Pourboire livreur ou livreuse</Cart.Text>
        <Cart.Text>{formatPrice(tips)}</Cart.Text>
      </Cart.BoxItem>
      <Cart.BoxItem>
        <Cart.Text f-w color="#2e3333">
          Total
        </Cart.Text>
        <Cart.Text f-w color="#2e3333">
          {formatPrice(total)}
        </Cart.Text>
      </Cart.BoxItem>
    </Cart.Scroll>
  )
}
