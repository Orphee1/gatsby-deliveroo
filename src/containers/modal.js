import React, { useContext, useEffect, useState } from "react"
import { GatsbyContext } from "../context/context"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Modal } from "../components/modal/index"
import { CounterContainer } from "./counter"
import { MdClose } from "react-icons/md"
import supplementsData from "../utils/supplements.json"
// console.log(supplementsData)

export const ModalContainer = ({ display, toggleModal }) => {
  const globalData = useContext(GatsbyContext)
  const [counter, setCounter] = useState(1)
  const [banner, setBanner] = useState(false)
  const {
    addProduct,
    product: { id, image, price, recipe, slug, title, type },
    removeProduct,
    subTotal,
  } = globalData

  useEffect(() => {
    setCounter(1)
  }, [toggleModal])

  const handleScroll = event => {
    const height = 260
    const scrollHeight = event.currentTarget.scrollTop
    if (scrollHeight > height) {
      setBanner(true)
    } else {
      setBanner(false)
    }
  }

  return (
    <Modal display={display}>
      <Modal.Card>
        <Modal.Banner display={`${banner ? "flex" : "none"}`}>
          <Modal.Text>{title}</Modal.Text>
        </Modal.Banner>
        <Modal.Button onClick={toggleModal}>
          <MdClose />
        </Modal.Button>
        <Modal.Scroll onScroll={handleScroll}>
          <Modal.ImageContainer>
            {image ? (
              <GatsbyImage image={image.gatsbyImageData} alt={title} />
            ) : (
              <StaticImage
                src="../images/image_missing.png"
                alt="Image missing logo"
                placeholder="blurred"
                layout="fixed"
                width={200}
              />
            )}
          </Modal.ImageContainer>
          <Modal.InfoContainer>
            <Modal.Title>{title}</Modal.Title>
            {recipe && <Modal.Text>{recipe?.recipe}</Modal.Text>}
            {type && <Modal.Text>{type}</Modal.Text>}
          </Modal.InfoContainer>
          {slug && slug.indexOf("burger") !== -1 && (
            <Modal.InfoContainer>
              <Modal.Text>Suppléments</Modal.Text>
              <Modal.Text>Ajoutez des suppléments à votre burger!</Modal.Text>
              {supplementsData.map(({ id, price, title }) => {
                return (
                  <Modal.ItemContainer key={id}>
                    <Modal.DuoContainer>
                      <Modal.Icon
                        id={id}
                        price={price}
                        title={title}
                        toggleModal={toggleModal}
                      />
                      <Modal.Text>{title}</Modal.Text>
                    </Modal.DuoContainer>
                    <Modal.Text>+{price}€</Modal.Text>
                  </Modal.ItemContainer>
                )
              })}
            </Modal.InfoContainer>
          )}
        </Modal.Scroll>
        <Modal.Bottom>
          <CounterContainer
            addProduct={addProduct}
            counter={counter}
            id={id}
            price={price}
            removeProduct={removeProduct}
            setCounter={setCounter}
            title={title}
          />
          <Modal.ButtonLarge>
            {/* Ajouter pour */}
            {/* {(price * counter).toFixed(2)} */}
            Total: {subTotal.toFixed(2)} €
          </Modal.ButtonLarge>
        </Modal.Bottom>
      </Modal.Card>
    </Modal>
  )
}
