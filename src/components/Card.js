import React, { useContext } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { FaStar } from "react-icons/fa"
import { GatsbyContext } from "../context/context"

const Card = ({
  fixedImage,
  image,
  popular,
  price,
  recipe,
  slug,
  title,
  toggle,
}) => {
  const globalData = useContext(GatsbyContext)
  const { setProduct } = globalData
  return (
    <Wrapper
      onClick={() => {
        toggle()
        setProduct({
          image: image,
          price: price,
          recipe: recipe,
          slug: slug,
          title: title,
        })
      }}
    >
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

      {fixedImage && <Image fixed={fixedImage.fixed} />}
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
