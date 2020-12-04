import React from "react"
import { graphql } from "gatsby"
import { Hero, Layout } from "../components"

const Home = ({ data }) => {
  //   console.log(data)
  const { contentfulRestaurant: restau } = data
  console.log(restau)

  return (
    <Layout>
      <Hero restau={restau} />
    </Layout>
  )
}

export default Home
export const query = graphql`
  {
    contentfulRestaurant {
      title
      foodNationality
      meal
      rate
      freeDelivery
      location {
        location
      }
      info {
        info
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      schedule
      sector
      offers
      burger {
        id
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
        popular
        price
        recipe {
          recipe
        }
        slug
        title
      }
      desserts {
        id
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
        price
        recipe {
          recipe
        }
        slug
        title
      }
      petiteFaim {
        id
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
        price
        slug
        title
        recipe {
          recipe
        }
      }
      softs {
        id
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
        price
        slug
        title
      }
    }
  }
`
