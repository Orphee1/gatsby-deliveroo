import React, { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { Cart } from "../components"
import { formatPrice } from "../utils/helpers"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import styled from "styled-components"

export const BasketContainer = () => {
  const { deliveryFee, cart, offered, serviceFee, subTotal, tips, total } =
    useContext(CartContext)

  return (
    <Wrapper>
      <Cart.Title>Votre panier</Cart.Title>
      <Cart.BoxColumn border height="auto">
        {cart.map(item => {
          const { id, price, quantity, title } = item
          return (
            <Cart.BoxItem nopadding key={id}>
              <Cart.Box>
                <Cart.Text>{quantity}x</Cart.Text>
                <Cart.Text>{title}</Cart.Text>
              </Cart.Box>
              <Cart.Text>{formatPrice(quantity * price)}</Cart.Text>
            </Cart.BoxItem>
          )
        })}
      </Cart.BoxColumn>
      <Cart.BoxColumn border>
        <Cart.BoxItem>
          <Cart.Text>Sous-total</Cart.Text>
          <Cart.Text>{formatPrice(subTotal)}</Cart.Text>
        </Cart.BoxItem>
        <Cart.BoxItem>
          <Cart.Text>Frais de livraison</Cart.Text>
          {offered ? (
            <Cart.Box>
              <Cart.Box>
                <AiOutlineExclamationCircle />
                <Cart.TextStrike>{formatPrice(deliveryFee)}</Cart.TextStrike>
              </Cart.Box>
              <Cart.Text style={{ color: "red" }}>Offert</Cart.Text>
            </Cart.Box>
          ) : (
            <Cart.Box>
              <AiOutlineExclamationCircle />
              <Cart.Text>{formatPrice(deliveryFee)}</Cart.Text>
            </Cart.Box>
          )}
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
        <Cart.BoxItem>
          <Cart.Text style={{ color: "#00ccbb" }}>
            Quels sont les frais appliqués?
          </Cart.Text>
        </Cart.BoxItem>
        <Cart.BoxItem>
          <Cart.Text>Pourboire livreur ou livreuse</Cart.Text>
          <Cart.Text>{formatPrice(tips)}</Cart.Text>
        </Cart.BoxItem>
      </Cart.BoxColumn>
      <Cart.BoxItem>
        <Cart.Title>Total</Cart.Title>
        <Cart.Title>{formatPrice(total)}</Cart.Title>
      </Cart.BoxItem>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  grid-row: 1/3;
  grid-column: 3/4;
  /* align-self: start; */
  background: var(--clr-white);
  width: 100%;
  height: 30rem;
  border-radius: var(--radius);
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.media2}) {
    display: none;
  }
`
