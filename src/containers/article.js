import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Article } from "../components"
import { CardContainer } from "."

export const ArticleContainer = ({ offer }) => {
  const { bigIcon, name, pitch, products } = offer
  return (
    <Article>
      <Article.Header>
        <Article.TitleBox>
          <Article.Icon>
            <GatsbyImage image={bigIcon.gatsbyImageData} alt="icon" />
          </Article.Icon>
          <Article.Title>{name}</Article.Title>
        </Article.TitleBox>
        {pitch && <Article.Text>{pitch.pitch}</Article.Text>}
      </Article.Header>
      <Article.CardContainer>
        {products.map(product => {
          return <CardContainer key={product.id} {...product} />
        })}
      </Article.CardContainer>
    </Article>
  )
}
