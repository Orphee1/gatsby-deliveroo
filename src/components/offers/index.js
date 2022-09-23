import React from "react"
import { Container, ContainerOffers } from "./styles/offers"

export const Offers = ({ children }) => {
  return <Container>{children}</Container>
}

Offers.ContainerOffers = ({ children, ...restProps }) => {
  return <ContainerOffers {...restProps}> {children} </ContainerOffers>
}
