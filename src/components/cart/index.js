import React from "react"
import {
  Container,
  Bottom,
  Box,
  BoxColumn,
  BoxItem,
  BoxLargeScreen,
  BoxLittleScreen,
  Button,
  ButtonClose,
  Empty,
  Full,
  Icon,
  Line,
  Scroll,
  Text,
  Title,
} from "./styles/cart"

export function Cart({ children }) {
  return <Container>{children} </Container>
}

Cart.Bottom = function CartBottom({ children, ...restProps }) {
  return <Bottom {...restProps}> {children} </Bottom>
}

Cart.Box = function CartBox({ children, ...restProps }) {
  return <Box {...restProps}> {children} </Box>
}

Cart.BoxColumn = function CartBoxColumn({ children, ...restProps }) {
  return <BoxColumn {...restProps}> {children} </BoxColumn>
}

Cart.BoxItem = function CartBoxItem({ children, ...restProps }) {
  return <BoxItem {...restProps}> {children} </BoxItem>
}

Cart.BoxLargeScreen = function CartBoxLargeScreen({ children, ...restProps }) {
  return <BoxLargeScreen {...restProps}> {children} </BoxLargeScreen>
}

Cart.BoxLittleScreen = function CartBoxLittleScreen({
  children,
  ...restProps
}) {
  return <BoxLittleScreen {...restProps}> {children} </BoxLittleScreen>
}

Cart.Button = function CartButton({ children, ...restProps }) {
  return <Button {...restProps}> {children} </Button>
}

Cart.ButtonClose = function CartButtonClose({ children, ...restProps }) {
  return <ButtonClose {...restProps}> {children} </ButtonClose>
}

Cart.Empty = function CartEmpty({ children, ...restProps }) {
  return <Empty {...restProps}> {children} </Empty>
}

Cart.Full = function CartFull({ children, ...restProps }) {
  return <Full {...restProps}> {children} </Full>
}

Cart.Icon = function CartIcon({ children, ...restProps }) {
  return <Icon {...restProps}> {children} </Icon>
}

Cart.Line = function CartLine({ ...restProps }) {
  return <Line {...restProps}> </Line>
}

Cart.Scroll = function CartScroll({ children, ...restProps }) {
  return <Scroll {...restProps}> {children} </Scroll>
}

Cart.Text = function CartText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>
}

Cart.Title = function CartTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>
}