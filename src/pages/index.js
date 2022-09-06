import React from "react"
import { graphql } from "gatsby"
import { Layout, Offers } from "../components"
import { HeroContainer } from "../containers"

const Home = ({ data }) => {
  const { contentfulRestaurant: restau } = data
  const offers = restau.productsOffers

  return (
    <Layout>
      <HeroContainer restau={restau} />
      <Offers offers={offers} />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    contentfulRestaurant {
      foodNationality
      freeDelivery
      info {
        info
      }
      location {
        location
      }
      meal
      rate
      schedule
      sector
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      productsOffers {
        name
        icon {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FIXED)
        }
        bigIcon: icon {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        products {
          ... on ContentfulBurger {
            id
            image {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
            fixedImage: image {
              gatsbyImageData(
                width: 200
                height: 150
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
            popular
            price
            title
            slug
            recipe {
              recipe
            }
          }
          ... on ContentfulDesserts {
            id
            image {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
            fixedImage: image {
              gatsbyImageData(
                width: 200
                height: 150
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
            title
            price
            recipe {
              recipe
            }
            slug
          }
          ... on ContentfulPetiteFaim {
            id
            image {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
            fixedImage: image {
              gatsbyImageData(
                width: 200
                height: 150
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
            price
            title
            recipe {
              recipe
            }
            slug
          }
          ... on ContentfulSofts {
            id
            image {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
            fixedImage: image {
              gatsbyImageData(
                width: 200
                height: 150
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
            price
            slug
            title
            type
          }
        }
        pitch {
          pitch
        }
      }
    }
  }
`
