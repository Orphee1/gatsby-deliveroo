import React from "react"
import {
  Article,
  Aside,
  Button,
  ButtonFixed,
  Container,
  Icon,
  Image,
  ImageContainer,
  InfoContainer,
  Row,
  Text,
  TextBox,
  Title,
} from "./styles/hero"

export const Hero = ({ children }) => {
  return <Container>{children}</Container>
}

Hero.Article = ({ children }) => {
  return <Article>{children}</Article>
}

Hero.Aside = ({ children }) => {
  return <Aside>{children}</Aside>
}

Hero.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}> {children}</Button>
}

Hero.ButtonFixed = ({ children, ...restProps }) => {
  return <ButtonFixed {...restProps}> {children}</ButtonFixed>
}

Hero.Icon = ({ children, ...restProps }) => {
  return <Icon {...restProps}>{children}</Icon>
}

Hero.Image = ({ src, alt, ...restProps }) => {
  return <Image {...restProps} src={src} alt={alt} />
}
Hero.ImageContainer = ({ children }) => {
  return <ImageContainer>{children}</ImageContainer>
}

Hero.InfoContainer = ({ children }) => {
  return <InfoContainer>{children}</InfoContainer>
}

Hero.Row = ({ children }) => {
  return <Row>{children}</Row>
}

Hero.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

Hero.TextBox = ({ children, ...restProps }) => {
  return <TextBox {...restProps}>{children}</TextBox>
}

Hero.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
