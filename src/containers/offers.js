import React, { useContext } from "react"
import { ModalContext } from "../context/modal-context"
import { Offers } from "../components"
import {
  ArticleContainer,
  CartContainer,
  ModalContainer,
  OfferStripeContainer,
} from "./index"
import { useIsSSr } from "../utils/helpers"

export const OffersContainer = ({ offers }) => {
  const { isModalOpen } = useContext(ModalContext)

  const isSsr = useIsSSr()
  if (isSsr) {
    return null
  } else {
    let position = isModalOpen ? "fixed" : ""
    document.body.style.position = position
  }

  return (
    <Offers>
      <OfferStripeContainer offers={offers} />
      <Offers.ContainerOffers>
        {offers.map((offer, i) => {
          return <ArticleContainer key={i} offer={offer} />
        })}
      </Offers.ContainerOffers>
      <ModalContainer display={!isModalOpen ? "none" : ""} />
      <CartContainer />
    </Offers>
  )
}
