import styled from "styled-components"

export const Container = styled.div`
  grid-column: 1/5;
  grid-row: 1/2;
  width: 100%;
  height: 4rem;
  background: var(--clr-white);
  border-top: 1px solid var(--cl-grey-5);
  -webkit-box-shadow: 0px 1px 11px -1px rgba(133, 133, 133, 0.16);
  box-shadow: 0px 1px 11px -1px rgba(133, 133, 133, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 75px;
  z-index: 10;
`

export const Box = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow-x: scroll;
`
export const Icon = styled.div`
  margin-right: 0.2rem;
`
export const Link = styled.a`
  background: var(--clr-white);
  color: var(--clr-turq);
  margin-right: 1.9rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  cursor: pointer;
`
export const LinkGreen = styled(Link)`
  background: var(--clr-turq);
  text-transform: uppercase;
  font-weight: bold;
  color: var(--clr-white);
`
export const Text = styled.span`
  background: yellow;
`
