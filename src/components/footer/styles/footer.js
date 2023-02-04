import styled from "styled-components/macro"

export const Box = styled.div`
  display: flex;
  a {
    color: white;
    margin-left: 15px;
    font-size: 22px;
  }
  a:nth-of-type(1):hover {
    color: #4967aa;
    /* color: red; */
  }
  a:nth-of-type(2):hover {
    color: #20a1f2;
  }
  a:nth-of-type(3):hover {
    color: #f50a6a;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 2rem;
  max-width: 1120px;
  margin: auto;
`

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  background: var(--cl-grey-1);
`

export const Column = styled.div`
  background: var(--cl-grey-2);
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: var(--radius);
`

export const Image = styled.img`
  width: 160px;
  margin-left: -10px;
  margin-bottom: 10px;
`

export const Link = styled.a`
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 13px;
  &:hover {
    color: var(--clr-turq);
  }
`

export const Row = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;

  @media screen and (max-width: ${({ theme }) => theme.media2}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`
export const Text = styled.span`
  color: var(--cl-grey-2);
`

export const Title = styled.h3`
  color: white;
  font-weight: 900;
  margin-bottom: 10px;
`
