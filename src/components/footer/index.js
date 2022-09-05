import React from "react"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import {
  Bottom,
  Box,
  Column,
  Container,
  Image,
  Link,
  Row,
  Text,
  Title,
} from "./styles/footer"

export const Footer = ({ children }) => {
  return <Container>{children}</Container>
}

Footer.Bottom = () => {
  return (
    <Bottom>
      <Box>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </Box>
      <Text>© 2022 Deliveroo</Text>
    </Bottom>
  )
}

Footer.Column = ({ children }) => {
  return <Column>{children}</Column>
}

Footer.Image = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

Footer.Link = ({ children }) => {
  return <Link>{children}</Link>
}

Footer.Row = ({ children }) => {
  return <Row>{children}</Row>
}

Footer.Title = ({ children }) => {
  return <Title>{children}</Title>
}
