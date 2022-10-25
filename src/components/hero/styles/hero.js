import styled from "styled-components/macro"

export const Article = styled.article`
  flex: 1.3;
  height: auto;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const Aside = styled.aside`
  flex: 0.7;
  height: 100px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  /* background-color: red; */
  border: ${({ btn }) => (btn ? "1px solid #eaecec" : "none")};
  width: ${({ width }) => width};
  background-color: var(--clr-white);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ButtonFixed = styled(Button)`
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 250px;
    left: 20px;
  }
`

export const Icon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin-left: ${({ ml }) => ml};
    margin-right: ${({ mr }) => mr};
  }
`

export const Container = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  padding: 20px 0;
`

export const InfoContainer = styled.div`
  flex: 2.1;
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: ${({ width }) => width};
  margin-right: ${({ mr }) => mr};
`

export const ImageContainer = styled.div`
  position: relative;
  flex: 0.9;
  div {
    width: 100%;
    border-radius: var(--radius);
  }
`

export const Row = styled.section`
  width: 90%;
  height: auto;
  max-width: 2560px;
  margin: auto;
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    flex-direction: column;
  }
`

export const Text = styled.span`
  color: ${props => props.color || "	#2e3333"};
  font-size: ${({ fs }) => fs || "1rem"};
  text-align: left;
  margin-right: ${({ mr }) => mr || "5px"};
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: ${props => props.layout || "row"};
  justify-content: left;
`

export const Title = styled.h1``
