import React from "react"
import { Hero } from "../components"
import { FaRegClock } from "react-icons/fa"
import styled from "styled-components"

export const TitleContainer = ({ title }) => {
  return (
    <Wrapper>
      <Hero.Title color="#fff">{title}</Hero.Title>
      <Hero.TextBox>
        <FaRegClock style={{ color: "#fff", marginRight: "5px" }} />
        <Hero.Text color="#fff">Livré dans 25 - 40 min</Hero.Text>
      </Hero.TextBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
`
