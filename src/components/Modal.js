import React from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"

const Modal = () => {
  return (
    <Wrapper className="show-modal">
      <div className="top-title">
        <h2>Bic Mac</h2>
        <button className="toggle-btn">
          <MdClose fontSize="2rem" style={{ color: "#00ccbb" }} />
        </button>
      </div>
      <div className="bottom">
        <button className="total">Total 11,00€</button>
        <button className="cancel">Annuler</button>
      </div>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background: var(--clr-white);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  opacity: 0;
  .show-modal {
    opacity: 1;
  }

  .top-title {
    width: 100%;
    height: 5rem;
    position: relative;
    border-bottom: 1px solid var(--cl-grey-5);
    h3 {
      font-weight: bold;
      color: var(--clr-black);
    }
  }
  .toggle-btn {
    position: absolute;
    top: 10;
    right: 10;
  }
  .bottom {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 810px) {
  }
`
