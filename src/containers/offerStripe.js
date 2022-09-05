import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { OfferStripe } from "../components/offerStripe"

export function OfferStripeContainer({ offers }) {
  return (
    <OfferStripe>
      <OfferStripe.Box>
        <OfferStripe.LinkGreen>Burger parfait</OfferStripe.LinkGreen>
        {offers.map(({ icon, name }, i) => {
          return (
            <OfferStripe.Link key={i}>
              <OfferStripe.Icon>
                <GatsbyImage image={icon.gatsbyImageData} alt="icon" />
              </OfferStripe.Icon>
              {name}
            </OfferStripe.Link>
          )
        })}
      </OfferStripe.Box>
    </OfferStripe>
  )
}
