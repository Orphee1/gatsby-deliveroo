import styled from "styled-components/macro"

export const Container = styled.button`
  width: 100%;
  height: 9rem;
  background: var(--clr-white);
  padding: 1rem 1rem 1.5rem 1rem;
  border: none;
  border-radius: var(--radius);
  outline: none;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0px 1px 5px 0px rgba(196, 196, 196, 0.42);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(196, 196, 196, 0.42);
  -moz-box-shadow: 0px 1px 5px 0px rgba(196, 196, 196, 0.42);
  &:hover {
    box-shadow: 0px 14px 12px 0px rgba(196, 196, 196, 0.42);
    -webkit-box-shadow: 0px 14px 12px 0px rgba(196, 196, 196, 0.42);
    -moz-box-shadow: 0px 14px 12px 0px rgba(196, 196, 196, 0.42);
  }
  flex: 0 0 26rem;
  margin: 0.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    flex: auto;
    margin: 0 0 0.1rem;
    &:hover {
      box-shadow: 0px 1px 5px 0px rgba(196, 196, 196, 0.42);
      -webkit-box-shadow: 0px 1px 5px 0px rgba(196, 196, 196, 0.42);
      -moz-box-shadow: 0px 1px 5px 0px rgba(196, 196, 196, 0.42);
    }
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 75%;
  height: 100%;
`
export const BoxLittle = styled.div`
  display: flex;
`
export const Text = styled.p`
  color: ${({ cl }) => cl || "	#424848"};
  margin-left: ${({ ml }) => ml};
`
export const Title = styled.h4`
  font-size: 1rem;
`
