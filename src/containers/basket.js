import React, { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { Cart } from "../components"
import { formatPrice } from "../utils/helpers"
import styled from "styled-components"
import { delivery } from "../images"

export const BasketContainer = () => {
  const { deliveryFee, cart, serviceFee, subTotal } = useContext(CartContext)
  console.log(cart)

  return (
    <Wrapper>
      <Cart.Title>Votre panier</Cart.Title>
      <Cart.BoxColumn border>
        {cart.map(item => {
          const { id, price, quantity, title } = item
          return (
            <Cart.BoxItem nopadding>
              <Cart.Text>{quantity}x</Cart.Text>
              <Cart.Text>{title}</Cart.Text>
              <Cart.Text>{formatPrice(quantity * price)}</Cart.Text>
            </Cart.BoxItem>
          )
        })}
      </Cart.BoxColumn>
      <Cart.BoxColumn>
        <Cart.BoxItem>
          <Cart.Text>Sous-total</Cart.Text>
          <Cart.Text>{formatPrice(subTotal)}</Cart.Text>
        </Cart.BoxItem>
        <Cart.BoxItem>
          <Cart.Text>Frais de livraison</Cart.Text>
          <Cart.Text>{formatPrice(deliveryFee)}</Cart.Text>
        </Cart.BoxItem>
        <Cart.BoxItem>
          <Cart.Text>Frais de service</Cart.Text>
          <Cart.Text>{formatPrice(serviceFee)}</Cart.Text>
        </Cart.BoxItem>
        <Cart.BoxItem>
          <Cart.Text color="#2e3333">Quels sont les frais appliqués?</Cart.Text>
        </Cart.BoxItem>
      </Cart.BoxColumn>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  grid-column: 3/4;
  background: var(--clr-white);
  width: 100%;
  height: 30rem;
  border-radius: var(--radius);
  /* display: flex;
  flex-direction: column; */
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.media2}) {
    display: none;
  }
`
