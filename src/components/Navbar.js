import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = ({}) => {
  return (
    <Wrapper>
      <h2>Hello from header</h2>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.header`
  position: absolute;
`
