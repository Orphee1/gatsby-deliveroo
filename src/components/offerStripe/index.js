import React from "react"
import {
  Box,
  Container,
  Icon,
  Link,
  LinkGreen,
  Text,
} from "./styles/offerStripe"

export const OfferStripe = ({ children }) => {
  return <Container>{children}</Container>
}

OfferStripe.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}
OfferStripe.Icon = ({ children, ...restProps }) => {
  return <Icon {...restProps}>{children}</Icon>
}

OfferStripe.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}

OfferStripe.LinkGreen = ({ children, ...restProps }) => {
  return <LinkGreen {...restProps}>{children}</LinkGreen>
}

OfferStripe.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
