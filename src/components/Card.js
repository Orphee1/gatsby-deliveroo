import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { FaStar } from "react-icons/fa"

const Card = ({ image, popular, price, recipe, title, toggle }) => {
  return (
    <Wrapper onClick={toggle}>
      <div className="info">
        <h3>{title}</h3>

        {recipe && <p>{recipe.recipe}</p>}

        <div className="price">
          <p>{parseInt(price).toFixed(2)} €</p>
          {popular && (
            <>
              <FaStar
                fontSize="1.3rem"
                style={{
                  marginLeft: "0.5rem",
                  marginTop: "0.3rem",
                  color: "#ff8100",
                }}
              />
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: "#ff8100",
                  fontSize: "1.2rem",
                }}
              >
                Populaire
              </span>
            </>
          )}
        </div>
      </div>
      {image && <Image fixed={image.fixed} />}
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.button`
  width: 100%;
  height: 9rem;
  background: var(--clr-white);
  padding: 1rem 1rem 1.5rem 1rem;
  border: none;
  border-radius: var(--radius);
  outline: none;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    width: 75%;
    height: 100%;
    overflow: hidden;

    h3 {
      font-weight: 400;
      color: var(--cl-grey-2);
    }
  }
  .price {
    width: 75%;
    display: flex;
    align-items: baseline;
    p {
      font-size: 1.4rem;
      color: var(--cl-grey-6);
    }
  }
  @media screen and (min-width: 810px) {
    flex: 0 0 26rem;
    margin: 0.5rem;
  }
`
