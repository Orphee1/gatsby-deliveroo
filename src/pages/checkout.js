import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import { BasketContainer } from "../containers"

const Checkout = () => {
  return (
    <Layout>
      <Wrapper>
        <BasketContainer />
      </Wrapper>
    </Layout>
  )
}

export default Checkout

const Wrapper = styled.main`
  min-height: 100vh;
  height: auto;
  padding: 2rem 0;
  margin: 0;
  background: #007e8a;
  display: grid;
  grid-template-columns: 10% 2fr 1fr 10%;
  grid-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.media2}) {
    background: red;
  }
`
