import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
  useCallback,
} from "react"
import { CartContext } from "../context/cart-context"
import { ModalContext } from "../context/modal-context"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Modal } from "../components/modal/index"
import CounterContainer from "./counter"
import { MdClose } from "react-icons/md"
import supplementsData from "../utils/supplements.json"

export const ModalContainer = ({ display }) => {
  const { addProductToCart } = useContext(CartContext)
  const {
    productShownOnModal: { id, image, price, recipe, slug, title, type },
    toggleModal,
  } = useContext(ModalContext)

  // handle "total to add" shown on modal
  const defaultState = {
    total: 0,
  }

  const totalReducer = (state, action) => {
    if (action.type === "ADD_ONE") {
      const updatedTotalToAdd = state.total + action.price
      return { total: updatedTotalToAdd }
    }
    if (action.type === "REMOVE_ONE") {
      const updatedTotalToAdd = state.total - action.price
      return { total: updatedTotalToAdd }
    }
    return defaultState
  }

  const [totalToAdd, dispatchTotalToAddAction] = useReducer(
    totalReducer,
    defaultState
  )

  const addPriceToTotalHandler = useCallback(price => {
    dispatchTotalToAddAction({ type: "ADD_ONE", price })
  }, [])
  const removePriceToTotalHandler = useCallback(price => {
    dispatchTotalToAddAction({ type: "REMOVE_ONE", price })
  }, [])

  useEffect(() => {
    totalToAdd.total = 0
  }, [toggleModal])

  // handle banner on scroll
  const imageContainerRef = useRef()
  const imageContainerHeight = imageContainerRef.current
    ? imageContainerRef.current.getBoundingClientRect().height
    : null
  const [bannerOnScroll, setBannerOnScroll] = useState(false)

  const handleScroll = event => {
    const scrollHeight = event.currentTarget.scrollTop
    if (scrollHeight > imageContainerHeight) {
      setBannerOnScroll(true)
    } else {
      setBannerOnScroll(false)
    }
  }

  const priceToShow = price ? price + totalToAdd.total : totalToAdd.total

  return (
    <Modal display={display}>
      <Modal.Card>
        <Modal.Banner display={`${bannerOnScroll ? "flex" : "none"}`}>
          <Modal.Text>{title}</Modal.Text>
        </Modal.Banner>
        <Modal.Button onClick={toggleModal}>
          <MdClose />
        </Modal.Button>
        <Modal.Scroll onScroll={handleScroll}>
          <Modal.ImageContainer ref={imageContainerRef}>
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
                        onAddToTotalModal={addPriceToTotalHandler}
                        onRemoveToTotalModal={removePriceToTotalHandler}
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
            id={id}
            price={price}
            title={title}
            toggleModal={toggleModal}
            onAddToTotalModal={addPriceToTotalHandler}
            onRemoveToTotalModal={removePriceToTotalHandler}
          />
          <Modal.ButtonLarge
            onClick={() => {
              toggleModal()
              addProductToCart({ title, price, id })
            }}
          >
            {`
            Ajouter pour
            ${priceToShow.toFixed(2)}€
            `}
          </Modal.ButtonLarge>
        </Modal.Bottom>
      </Modal.Card>
    </Modal>
  )
}
