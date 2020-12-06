import React, { useState } from "react"
import styled from "styled-components"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

const StateCounter = ({ addProduct, item, removeProduct }) => {
  const [count, setCount] = useState(item.quantity)
  return (
    <Wrapper>
      <button
        className="counter-btn"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          }
          removeProduct(item)
        }}
      >
        <FiMinusCircle />
      </button>
      {count}
      <button
        className="counter-btn"
        onClick={() => {
          setCount(count + 1)
          addProduct(item)
        }}
      >
        <FiPlusCircle />
      </button>
    </Wrapper>
  )
}

export default StateCounter

const Wrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0.5rem auto 0;
  .counter-btn {
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
  }
`
