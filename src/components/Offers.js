import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Article, Card, Cart, Modal } from "./index"
import { OfferStripeContainer } from "../containers/offerStripe"

const Offers = ({ offers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Wrapper>
      <OfferStripeContainer offers={offers} />

      <section className="offers-container green">
        {offers.map((offer, index) => {
          // console.log(offer)
          const { bigIcon, name, pitch, products } = offer
          return (
            <Article.Container className="offer" key={index}>
              <div className="header blue">
                <div className="offer-title red">
                  <GatsbyImage image={bigIcon.gatsbyImageData} alt="icon" />
                  <h2>{name}</h2>
                </div>
                {pitch && <p>{pitch.pitch}</p>}
              </div>
              <div className="card-container">
                {products.map(product => {
                  return (
                    <Card
                      key={product.id}
                      {...product}
                      toggleModal={toggleModal}
                    />
                  )
                })}
              </div>
            </Article.Container>
          )
        })}
      </section>
      <div
        className={`modal-container ${isModalOpen && "show-modal-container"}`}
      >
        <Modal toggleModal={toggleModal} />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </Wrapper>
  )
}

export default Offers

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--clr-grey-4);
  /* background: green; */
  position: relative;
  .middle {
    width: 100%;
    height: 4rem;
    border-top: 1px solid var(--cl-grey-5);
    /* background: var(--clr-white); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
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
    align-items: center;
    h2 {
      margin-left: 0.5rem;
    }
  }
  .card-container {
    width: 100%;
  }

  .cart-container {
    width: 100%;
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
      grid-column: 3/4;
      grid-row: 2/3;
      z-index: 50;
      position: sticky;
      top: 0;
    }
  }
`
