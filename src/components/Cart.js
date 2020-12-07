import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { Counter, StateCounter } from "./index"

const Cart = () => {
  const [isCartDisplayed, setIsCartDisplayed] = useState(false)
  const globalData = useContext(GatsbyContext)
  const {
    addProduct,
    cart,
    deliveryFee,
    quantity,
    removeProduct,
    serviceFee,
    subTotal,
  } = globalData
  const [tips, setTips] = useState(0)
  const total = subTotal + deliveryFee + serviceFee + tips

  const toggleCart = () => {
    setIsCartDisplayed(!isCartDisplayed)
  }

  return (
    <Wrapper>
      <article className="cart">
        {isCartDisplayed ? (
          <section className="cart-displayed">
            <div></div>
          </section>
        ) : (
          <section className="cart-bottom">
            <button className="btn" onClick={toggleCart}>
              <span>{quantity}</span>
              <p>Voir panier</p>
              <span>{subTotal.toFixed(2)}</span>
            </button>
          </section>
        )}
      </article>
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
                <div className="s-b">
                  <AiOutlineExclamationCircle
                    fontSize="1.2rem"
                    style={{
                      color: "#424848",
                      marginRight: "0.5rem",
                    }}
                  />
                  <span>{deliveryFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="sub-container">
                <h3>Frais de service</h3>
                <div className="s-b">
                  <AiOutlineExclamationCircle
                    fontSize="1.2rem"
                    style={{
                      color: "#424848",
                      marginRight: "0.5rem",
                    }}
                  />
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
            <div className="empty-container">
              <div className="s-b">
                <p>Votre panier est vide</p>
              </div>
            </div>
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
  .cart {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: var(--clr-white);
  }
  .cart-bottom {
    width: 100%;
    height: 8rem;
    background: var(--clr-white);
    padding: 0.5rem 1rem 1.5rem 0.5rem;
    position: fixed;
    bottom: 0;
    z-index: 1099;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > button {
      width: 90%;
      height: 4.6rem;
      display: flex;
      justify-content: space-between;
      background: var(--clr-turq);
      p,
      span {
        color: var(--clr-white);
        font-size: 1.2rem;
        font-weight: bold;
      }
      span:nth-child(1) {
        background: #17bdae;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
      }
    }
  }

  .cart-displayed {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
  }
  .cartEmpty {
    display: none;
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
      border-radius: var(--radius);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
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
      border-radius: var(--radius);
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      h3,
      span {
        font-weight: normal;
        font-size: 1.2rem;
        color: var(--cl-grey-2);
      }
      > button {
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
    .empty-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 3rem auto;
      p {
        font-size: 1.1rem;
      }
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
