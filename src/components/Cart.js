import React from "react"
import styled from "styled-components"

const Cart = () => {
  return (
    <Wrapper>
      <div className="btn-container">
        <button className="btn">Valider mon panier</button>
      </div>
    </Wrapper>
  )
}

export default Cart

const Wrapper = styled.aside`
  width: 100%;
  height: 15rem;
  background: var(--clr-white);

  @media screen and (min-width: 810px) {
  }
`
