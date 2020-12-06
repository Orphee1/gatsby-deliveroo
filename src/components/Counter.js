import React from "react"
import styled from "styled-components"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

const Counter = ({ tips, setTips }) => {
  return (
    <Wrapper>
      <button
        className="counter-btn"
        onClick={() => {
          if (tips > 0) {
            setTips(tips - 1)
          }
        }}
      >
        <FiMinusCircle
        // style={{ color: "#00ccbb" }}
        />
      </button>

      <button
        className="counter-btn"
        onClick={() => {
          setTips(tips + 1)
        }}
      >
        <FiPlusCircle
        // style={{ color: "#00ccbb" }}
        />
      </button>
    </Wrapper>
  )
}

export default Counter

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
