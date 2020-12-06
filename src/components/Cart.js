import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { Counter, StateCounter } from "./index"

const Cart = () => {
  const globalData = useContext(GatsbyContext)
  const {
    addProduct,
    cart,
    deliveryFee,
    removeProduct,
    serviceFee,
    subTotal,
  } = globalData
  const [tips, setTips] = useState(0)
  const total = subTotal + deliveryFee + serviceFee + tips
  return (
    <Wrapper>
      <article className="cart"></article>
      <article className="cart810">
        {cart.length > 0 ? (
          <section className="cartFull">
            <button className="btn">Valider mon panier</button>
            <div className="container">
              {cart.map((item, index) => {
                // console.log(item)
                const { id, title, price, quantity } = item
                return (
                  <div className="sub-container" key={index}>
                    <StateCounter
                      addProduct={addProduct}
                      removeProduct={removeProduct}
                      item={item}
                    />
                    <h3>{title}</h3>
                    <span>{(price * quantity).toFixed(2)}</span>
                  </div>
                )
              })}
            </div>
            <div className="container">
              <div className="sub-container">
                <h3>Sous-total</h3>
                <span>{subTotal.toFixed(2)}</span>
              </div>
              <div className="sub-container">
                <h3>Frais de livraison</h3>
                <div>
                  <AiOutlineExclamationCircle />
                  <span>{deliveryFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="sub-container">
                <h3>Frais de service</h3>
                <div>
                  <AiOutlineExclamationCircle />
                  <span>{serviceFee.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="sub-container">
                <h3>Pourboire livreur</h3>
                <div className="s-b">
                  <Counter tips={tips} setTips={setTips} />
                  <span>{tips.toFixed(2)}</span>
                </div>
              </div>
              <div className="sub-container">
                <h3>Total</h3>
                <span>{total.toFixed(2)}</span>
              </div>
            </div>
          </section>
        ) : (
          <section className="cartEmpty">
            <button className="btn">Valider mon panier</button>
          </section>
        )}
      </article>
    </Wrapper>
  )
}

export default Cart

const Wrapper = styled.aside`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);

  .cart {
    width: 100%;
  }
  .cart810 {
    display: none;
  }
  @media screen and (min-width: 810px) {
    .cart {
      display: none;
    }
    .cart810 {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .cartEmpty {
      width: 100%;
      height: 20rem;
      background: var(--clr-white);
      padding: 1rem;
      display: flex;
      align-items: flex-start;
      button {
        width: 100%;
        height: 4.6rem;
        display: flex;
        justify-content: center;
        color: var(--clr-white);
        background: var(--clr-grey-3);
      }
    }
    .cartFull {
      width: 100%;
      height: auto;
      background: var(--clr-white);
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      button {
        width: 100%;
        height: 4.6rem;
        display: flex;
        justify-content: center;
        color: var(--clr-white);
        background: var(--clr-turq);
      }
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin: 1rem auto;
    }
    .sub-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem auto;
    }
  }
`
