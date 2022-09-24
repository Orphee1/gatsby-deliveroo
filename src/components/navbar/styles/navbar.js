import styled from "styled-components/macro"

export const Button = styled.button`
  background: var(--clr-white);
  color: var(--clr-grey-7);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: 1px solid var(--cl-grey-5);
  cursor: pointer;
  border-radius: var(--radius);
  svg {
    color: var(--clr-turq);
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`

export const Container = styled.header`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  border-bottom: 1px solid var(--cl-grey-5);
  position: sticky;
  top: 0;
  z-index: 10;
`

export const Row = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 2560px;
  height: 100%;
  margin: auto;
`

export const Image = styled.img`
  width: 120px;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ListItem = styled.li`
  &:nth-of-type(1) {
    @media screen and (max-width: ${({ theme }) => theme.media2}) {
      display: none;
    }
  }
  &:nth-of-type(2) {
    @media screen and (max-width: ${({ theme }) => theme.media3}) {
      display: none;
    }
  }
`

export const Text = styled.span`
  color: var(--clr-gey-1);
`
