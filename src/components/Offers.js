import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Card } from "./index"

const Offers = ({ offers }) => {
  //   console.log(offers)
  return (
    <Wrapper>
      <div className="middle">
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
      <section className="offers-container">
        {offers.map((offer, index) => {
          //   console.log(offer)
          const { icon, name, pitch, products } = offer
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
                  console.log(product)
                  return <Card product={product} key={product.id} />
                })}
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

export default Offers

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--clr-grey-4);
  .middle {
    width: 100%;
    height: 5rem;
    border-top: 1px solid var(--cl-grey-5);
    background: var(--clr-white);
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
    margin-top: 5rem;
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
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 810px) {
  }
`
