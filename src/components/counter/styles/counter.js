import styled from "styled-components"

export const Container = styled.div`
  /* background: red; */
  height: 2rem;
  width: ${({ large }) => (large ? "30%" : "auto")};
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  cursor: ${({ cursor }) => cursor};
  border: none;
  background: transparent;
  svg {
    color: ${({ color }) => color};
    font-size: 1.5rem;
  }
`
export const Count = styled.span`
  color: var(--clr-black);
  font-size: 1.5rem;
  font-weight: bold;
`
