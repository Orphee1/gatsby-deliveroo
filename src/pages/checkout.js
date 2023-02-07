import React from "react"
import { Layout } from "../components"
import { BasketContainer, LoginContainer, TitleContainer } from "../containers"
import styled from "styled-components"

const Checkout = ({ location }) => {
  const title = location.state
    ? location.state.title
    : "Oops! How did you come here?"

  return (
    <Layout>
      <Wrapper>
        <TitleContainer title={title} />
        <ModuleContainer>
          {" "}
          <LoginContainer />
        </ModuleContainer>
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
  grid-template-rows: 20% 1fr;
  grid-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.media2}) {
    grid-template-columns: 10% 1fr 10%;
  }
`

const ModuleContainer = styled.div`
  grid-column: 2/3;
  /* grid-row: 1/2; */
`
