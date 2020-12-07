import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { AiOutlineExclamationCircle, MdClose } from "react-icons/all"
import { Counter, StateCounter } from "./index"
import { Link } from "gatsby"

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
      {cart.length > 0 && (
        <article className="cart">
          {isCartDisplayed ? (
            <section className="cart-displayed">
              <div className="content">
                <header className="top">
                  <h3>Mon panier</h3>
                  <button className="toggle-btn" onClick={toggleCart}>
                    <MdClose fontSize="2rem" style={{ color: "#424848" }} />
                  </button>
                </header>
                <div className="scroll-container">
                  <div className="container">
                    {cart.map((item, index) => {
                      // console.log(item)
                      const { title, price, quantity } = item
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
                </div>
                <footer className="bottom">
                  <Link
                    to="/checkout"
                    style={{
                      width: "100%",
                      height: "4.6rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <button className="btn">Valider mon panier</button>
                  </Link>
                  <button className="btn" onClick={toggleCart}>
                    Retour au menu
                  </button>
                </footer>
              </div>
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
      )}
      <article className="cart810">
        {cart.length > 0 ? (
          <section className="cartFull">
            <button className="btn">Valider mon panier</button>
            <div className="container">
              {cart.map((item, index) => {
                // console.log(item)
                const { title, price, quantity } = item
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
  z-index: 50;
  .cart {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: var(--clr-white);
    z-index: 300;
  }
  .cart-bottom {
    width: 100%;
    height: 8rem;
    background: var(--clr-white);
    padding: 0.5rem 1rem 1.5rem 0.5rem;
    position: fixed;
    bottom: 0;
    /* z-index: 1099; */
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
    /* z-index: 50; */
  }
  .content {
    width: 90%;
    padding: 0.5rem auto 1rem auto; //
    height: auto;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top {
    width: 100%;
    height: 5rem;
    padding: 0.5rem auto;
    border-bottom: 1px solid var(--cl-grey-5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--clr-black);
    }
  }
  .toggle-btn {
    position: absolute;
    top: 10;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
  .scroll-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 60vh;
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
    h3,
    span {
      font-weight: normal;
      font-size: 1.2rem;
      color: var(--cl-grey-2);
    }
  }
  .bottom {
    /* opacity: 0; */
    position: absolute;
    bottom: 0;
    background: var(--clr-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 24vh;
    border-top: 1px solid var(--cl-grey-5);
    padding: 0.5rem 0 1rem 0;
    /* -webkit-box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.47);
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.47); */
    button {
      width: 90%;
      height: 4.6rem;
      color: var(--clr-white);
      background: var(--clr-turq);
      display: flex;
      justify-content: center;
      margin: 0.5rem auto;
    }
    button:nth-child(2) {
      color: var(--clr-turq);
      background: var(--clr-white);
    }
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
