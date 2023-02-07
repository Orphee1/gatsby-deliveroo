import React from "react"

import { Container, Text, Title, Span } from "./styles/login"

export const Login = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Login.Text = function ({ children, ...restProps }) {
  return <Text>{children}</Text>
}

Login.Title = function ({ children, ...restProps }) {
  return <Title>{children}</Title>
}

Login.Span = function ({ children, ...restProps }) {
  return <Span>{children}</Span>
}
