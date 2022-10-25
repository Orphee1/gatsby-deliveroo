import styled from "styled-components/macro"

export const Container = styled.section`
  display: grid;
  grid-template-columns: 5vw 60vw 30vw 5vw;
  grid-column-gap: 0.3rem;
  grid-template-rows: 4rem auto;
  position: relative;
  background: var(--clr-grey-4);

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: auto;
  }
`
export const ContainerOffers = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    grid-column: 1/5;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }
`
