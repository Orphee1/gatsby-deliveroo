import React, { useContext } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaStar } from "react-icons/fa"
import { GatsbyContext } from "../context/context"
import { formatPrice } from "../utils/helpers"

const Card = ({
  fixedImage,
  id,
  image,
  popular,
  price,
  recipe,
  title,
  type,
  toggleModal,
}) => {
  const globalData = useContext(GatsbyContext)
  const { cart, setCart, setProduct } = globalData

  return (
    <Wrapper
      onClick={() => {
        toggleModal()
        setProduct({
          id,
          image,
          price,
          recipe,
          title,
          type,
        })
        const newCart = [...cart]
        newCart.push({
          id,
          title,
          price,
          quantity: 1,
        })
        setCart(newCart)
      }}
    >
      <div className="info">
        <h3>{title}</h3>
        {recipe && <p>{`${recipe.recipe.substring(0, 57)}...`}</p>}
        {type && <p>{type}</p>}

        <div className="price">
          <p>{formatPrice(price)}</p>
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
      {fixedImage && (
        <GatsbyImage image={fixedImage.gatsbyImageData} alt={title} />
      )}
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
  .image-container {
    width: 120px;
    height: 120px;
    overflow: hidden;
  }
  @media screen and (min-width: 810px) {
    flex: 0 0 26rem;
    margin: 0.5rem;
  }
`
