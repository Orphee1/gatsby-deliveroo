import React from "react"
import { Box, BoxLittle, Container, Text, Title } from "./styles/card"

export const Card = ({ children, ...restProps }) => {
  return <Container {...restProps}> {children} </Container>
}

Card.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}
Card.BoxLittle = ({ children, ...restProps }) => {
  return <BoxLittle {...restProps}>{children}</BoxLittle>
}
Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
