import React from "react"
import { Layout } from "../components"
import { Link } from "gatsby"
import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <h1>Oop's </h1>
      <Link to="/" className="btn">
        <span>Home</span>
      </Link>
      <p>The page you're looking for doesn&#39;t exist... </p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage

const Wrapper = styled.main`
  min-height: 100vh;
  height: auto;
  margin: 0;
  background: #006d69;
  display: grid;
  place-items: center;
  h1,
  p {
    color: white;
  }
  span {
    color: #006d69;
  }
  p,
  span {
    font-size: 1.2rem;
  }
`
