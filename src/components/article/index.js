import React from "react"

import {
  Container,
  CardContainer,
  Header,
  Icon,
  Text,
  Title,
  TitleBox,
} from "./styles/article"

export const Article = ({ children }) => {
  return <Container> {children} </Container>
}

Article.CardContainer = ({ children, ...restProps }) => {
  return <CardContainer {...restProps}> {children} </CardContainer>
}

Article.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}> {children} </Header>
}

Article.Icon = ({ children, ...restProps }) => {
  return <Icon {...restProps}> {children} </Icon>
}

Article.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}> {children} </Text>
}

Article.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}> {children} </Title>
}

Article.TitleBox = ({ children, ...restProps }) => {
  return <TitleBox {...restProps}> {children} </TitleBox>
}
