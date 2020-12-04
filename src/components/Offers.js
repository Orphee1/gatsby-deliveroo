import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const Offers = ({ offers }) => {
  //   console.log(offers)
  return (
    <Wrapper>
      <div className="middle">
        <span style={{ color: "#00ccbb" }}>BURGER PARFAIT</span>
        {offers.map(offer => {
          console.log(offer)
          const { icon, name } = offer
          return (
            <div>
              <Image fixed={icon.fixed} />
              <span>{name}</span>
            </div>
          )
        })}
      </div>
      <section></section>
    </Wrapper>
  )
}

export default Offers

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--clr-grey-4);
  .middle {
    width: 100%;
    height: 5rem;
    border-top: 1px solid var(--cl-grey-5);
    background: var(--clr-white);
  }
  @media screen and (min-width: 810px) {
  }
`
