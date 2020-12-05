import React, { useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Card, Cart, Modal } from "./index"

const Offers = ({ offers }) => {
  //   console.log(offers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Wrapper>
      <div className="middle">
        <div className="middle-box">
          <span style={{ color: "#00ccbb", flexShrink: "0", margin: "0 1rem" }}>
            BURGER PARFAIT
          </span>
          {offers.map((offer, index) => {
            const { icon, name } = offer
            return (
              <div className="icon-offer" key={index}>
                <Image fixed={icon.fixed} />
                <span>{name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <section className="offers-container">
        {offers.map((offer, index) => {
          const { icon, name, pitch, products } = offer
          //   console.log(products)
          return (
            <article className="offer" key={index}>
              <div className="header">
                <div className="offer-title">
                  <Image fixed={icon.fixed} />
                  <h2>{name}</h2>
                </div>
                {pitch && <p>{pitch.pitch}</p>}
              </div>
              <div className="card-container">
                {products.map(product => {
                  //   console.log(product)
                  return (
                    <Card
                      key={product.id}
                      {...product}
                      toggle={toggleModal}
                      onClick={toggleModal}
                    />
                  )
                })}
              </div>
            </article>
          )
        })}
      </section>
      <div
        className={`modal-container ${isModalOpen && "show-modal-container"}`}
      >
        <Modal toggle={toggleModal} />
      </div>
      {/* <div className="cart-container show-cart-container">
        <Cart />
      </div> */}
    </Wrapper>
  )
}

export default Offers

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--clr-grey-4);
  position: relative;
  .middle {
    width: 100%;
    height: 4rem;
    border-top: 1px solid var(--cl-grey-5);
    background: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .middle-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
  }
  .icon-offer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    flex-shrink: 0;
    span {
      color: var(--clr-turq);
      margin-left: 0.5rem;
    }
  }
  .offers-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }
  .offer {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
  .header {
    background: var(--clr-grey-4);
    width: 90%;
    margin: 1rem auto;
    p {
      font-size: 1.2rem;
    }
  }

  .offer-title {
    display: flex;
    align-items: baseline;
    h2 {
      margin-left: 0.5rem;
    }
  }
  .card-container {
    width: 100%;
  }

  .cart-container {
    display: none;
  }

  .show-cart-container {
    display: block;
  }

  .modal-container {
    display: none;
  }
  .show-modal-container {
    display: block;
  }
  @media screen and (min-width: 810px) {
    display: grid;
    grid-template-columns: 5vw 60vw 30vw 5vw;
    grid-column-gap: 0.3rem;
    grid-template-rows: 4rem auto;
    position: relative;
    .middle {
      grid-column: 1/5;
      grid-row: 1/2;
      position: sticky;
      top: 0;
      z-index: 999;
    }
    .middle-box {
      margin-left: 10vw;
    }
    .offers-container {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    .offer {
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
    }
    .cart-container {
      display: flex;
      z-index: 1000;
      grid-column: 3/4;
      grid-row: 2/3;
      position: sticky;
      top: 0;
    }
  }
`
