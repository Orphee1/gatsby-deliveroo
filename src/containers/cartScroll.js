import React, { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { Cart } from "../components"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { formatPrice } from "../utils/helpers"

export const CartScrollContainer = ({ display, toggleDisplay }) => {
  const {
    additionalFee,
    addProductToCart,
    addTips,
    cart,
    deliveryFee,
    serviceFee,
    offered,
    subTotal,
    removeTips,
    tips,
    total,
    removeProductFromCart,
  } = useContext(CartContext)

  return (
    <Cart.Scroll display={`${display ? "flex" : "none"}`}>
      <Cart.BoxLittleScreen>
        <Cart.ButtonClose onClick={toggleDisplay}>
          <MdClose />
        </Cart.ButtonClose>
      </Cart.BoxLittleScreen>
      <Cart.Title>Votre commande</Cart.Title>
      {cart.map(product => {
        const { id, price, quantity, title } = product
        return (
          <Cart.BoxItem key={id}>
            <Cart.Text>{title}</Cart.Text>
            <Cart.Box>
              <FiMinusCircle
                style={{
                  color: "#00ccbb",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  removeProductFromCart(product)
                }}
              />
              <Cart.Text>{quantity}</Cart.Text>
              <FiPlusCircle
                style={{
                  color: "#00ccbb",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  addProductToCart(product)
                }}
              />
              <Cart.Text>{formatPrice(price)}</Cart.Text>
            </Cart.Box>
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
          {offered ? (
            <Cart.Text>Offert!</Cart.Text>
          ) : (
            <Cart.Text>{formatPrice(deliveryFee)}</Cart.Text>
          )}
        </Cart.Box>
      </Cart.BoxItem>
      {offered ? (
        <Cart.Advert text="Avec la livraison offerte, vous économisez 1,99€" />
      ) : (
        <Cart.Advert text="Dépensez plus de 12€ pour bénéficier de la livraison offerte" />
      )}
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
        <Cart.Box>
          <Cart.Box>
            <FiMinusCircle
              style={{
                color: "#00ccbb",
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={removeTips}
            />
            <FiPlusCircle
              style={{
                color: "#00ccbb",
                cursor: "pointer",
              }}
              onClick={addTips}
            />
          </Cart.Box>
          <Cart.Text>{formatPrice(+tips)}</Cart.Text>
        </Cart.Box>
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
