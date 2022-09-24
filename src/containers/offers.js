import React, { useState } from "react"
import { Offers } from "../components"
import {
  ArticleContainer,
  CartContainer,
  ModalContainer,
  OfferStripeContainer,
} from "./index"
import { useIsSSr } from "../utils/helpers"

export const OffersContainer = ({ offers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isSsr = useIsSSr()
  if (isSsr) {
    return null
  } else {
    let position = isModalOpen ? "fixed" : ""
    document.body.style.position = position
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Offers>
      <OfferStripeContainer offers={offers} />
      <Offers.ContainerOffers>
        {offers.map((offer, i) => {
          return (
            <ArticleContainer key={i} offer={offer} toggleModal={toggleModal} />
          )
        })}
      </Offers.ContainerOffers>
      <ModalContainer
        display={!isModalOpen ? "none" : ""}
        toggleModal={toggleModal}
      />
      <CartContainer />
    </Offers>
  )
}
