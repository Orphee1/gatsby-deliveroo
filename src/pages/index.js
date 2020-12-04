import React from "react"
import { graphql } from "gatsby"
import { Hero, Layout, Offers } from "../components"

const Home = ({ data }) => {
  //   console.log(data)
  const { contentfulRestaurant: restau } = data
  const offers = restau.productsOffers

  return (
    <Layout>
      <Hero restau={restau} />
      <Offers offers={offers} />
    </Layout>
  )
}

export default Home
export const query = graphql`
  {
    contentfulRestaurant {
      productsOffers {
        name
        icon {
          fixed(width: 20) {
            ...GatsbyContentfulFixed
          }
        }
        products {
          ... on ContentfulBurger {
            id
            image {
              fixed(width: 110, height: 110) {
                ...GatsbyContentfulFixed
              }
            }
            title
            popular
            price
            recipe {
              recipe
            }
            slug
          }
          ... on ContentfulDesserts {
            id
            image {
              fixed(width: 110, height: 110) {
                ...GatsbyContentfulFixed
              }
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
              fixed(width: 110, height: 110) {
                ...GatsbyContentfulFixed
              }
            }
            title
            price
            recipe {
              recipe
            }
            slug
          }
          ... on ContentfulSofts {
            id
            image {
              fixed(width: 110, height: 110) {
                ...GatsbyContentfulFixed
              }
            }
            title
            price
            slug
          }
        }
        pitch {
          pitch
        }
      }
      foodNationality
      freeDelivery
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
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
    }
  }
`
