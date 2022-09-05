import React from "react"
import {
  Button,
  Container,
  Image,
  List,
  ListItem,
  Row,
  Text,
} from "./styles/navbar"

export const Navbar = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Navbar.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>
}

Navbar.Image = ({ alt, src }) => {
  return <Image alt={alt} src={src} />
}

Navbar.List = ({ children, ...restProps }) => {
  return <List>{children}</List>
}

Navbar.ListItem = ({ children, ...restProps }) => {
  return <ListItem>{children}</ListItem>
}

Navbar.Row = ({ children, ...restProps }) => {
  return <Row>{children}</Row>
}

Navbar.Text = ({ children }) => {
  return <Text>{children}</Text>
}
