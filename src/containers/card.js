import React, { useContext } from "react"
import { Card } from "../components"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/helpers"
import { GatsbyContext } from "../context/context"

export const CardContainer = ({
  toggleModal,
  fixedImage,
  id,
  image,
  popular,
  price,
  recipe,
  slug,
  title,
  type,
}) => {
  const { cart, setCart, setProduct } = useContext(GatsbyContext)

  return (
    <Card
      key={id}
      onClick={() => {
        toggleModal()
        setProduct({
          id,
          image,
          price,
          recipe,
          slug,
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
      <Card.Box>
        <Card.Title>{title}</Card.Title>
        {recipe && (
          <Card.Text>{`${recipe.recipe.substring(0, 57)}...`}</Card.Text>
        )}
        {type && <Card.Text>{type}</Card.Text>}
        <Card.BoxLittle>
          <Card.Text>{formatPrice(price)}</Card.Text>
          {popular && (
            <Card.Text ml="10px" cl="#ff8100">
              • Populaire
            </Card.Text>
          )}
        </Card.BoxLittle>
      </Card.Box>
      {fixedImage && (
        <GatsbyImage image={fixedImage.gatsbyImageData} alt={title} />
      )}
    </Card>
  )
}
