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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 810px) {
  }
`
