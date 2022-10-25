import styled from "styled-components/macro"

export const Container = styled.main`
  display: ${props => props.display || "flex"};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  z-index: 999;
`

export const Card = styled.div`
  background: var(--clr-white);
  position: relative;
  width: 36rem;
  height: 90%;
  margin: auto;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 100%;
  }
`
export const Banner = styled.div`
  z-index: 9999;
  height: 4rem;
  width: 100%;
  background: var(--clr-white);
  display: ${({ display }) => display};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  border-bottom: 1px solid var(--cl-grey-8);
  p {
    font-weight: bold;
  }
`

export const Button = styled.button`
  z-index: 99999;
  width: 2.5rem;
  height: 2.5rem;
  background: white;
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.75rem;
    color: var(--clr-turq);
  }
`

export const ButtonLarge = styled.button`
  height: 3rem;
  width: 90%;
  margin: 1rem auto;
  cursor: pointer;
  border: none;
  border-radius: var(--radius);
  background: var(--clr-turq);
  font-size: 1rem;
  font-weight: bold;
  color: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Bottom = styled.div`
  height: 15rem;
  box-shadow: 0px -1px 5px 0px rgba(189, 189, 189, 0.33);
  -webkit-box-shadow: 0px -1px 5px 0px rgba(189, 189, 189, 0.33);
  -moz-box-shadow: 0px -1px 5px 0px rgba(189, 189, 189, 0.33);
`

export const Icon = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 1.75rem;
    color: ${({ color }) => color || "#aaacac"};
  }
  svg:hover {
    color: var(--clr-turq);
  }
`

export const ImageContainer = styled.div`
  div {
    height: 20rem;
    width: 100%;
  }
`
export const InfoContainer = styled.div`
  width: 95%;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
`
export const ItemContainer = styled(InfoContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const DuoContainer = styled(ItemContainer)`
  width: auto;
  margin: auto 0;
`

export const Scroll = styled.div`
  height: auto;
  width: 100%;
  overflow: scroll;
`
export const Text = styled.p`
  font-size: ${({ fs }) => fs};
  color: ${({ gr }) => (gr ? "#aaacac" : "black")};
`

export const Title = styled.h3``
