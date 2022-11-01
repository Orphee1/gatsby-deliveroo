import React, { useContext } from "react"
import { Card } from "../components"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/helpers"
import { ModalContext } from "../context/modal-context"

export const CardContainer = ({
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
  const { setProductShownOnModal, toggleModal } = useContext(ModalContext)

  const handleClick = (id, image, price, recipe, slug, title, type) => {
    toggleModal()
    setProductShownOnModal({
      id,
      image,
      price,
      recipe,
      slug,
      title,
      type,
    })
  }

  return (
    <Card
      key={id}
      onClick={() => {
        handleClick(id, image, price, recipe, slug, title, type)
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
