import React from "react"
import { Button, Container, Count } from "./styles/counter"

export const Counter = ({ children, ...restProps }) => {
  return <Container {...restProps}> {children} </Container>
}

Counter.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}> {children} </Button>
}

Counter.Count = ({ children, ...restProps }) => {
  return <Count {...restProps}> {children} </Count>
}
