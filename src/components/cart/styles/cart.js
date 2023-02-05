import styled from "styled-components/macro"

export const Container = styled.aside`
  grid-column: 1/5;
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 100%;
  height: 16rem;
  display: flex;
  z-index: 40;

  @media only screen and (min-width: ${({ theme }) => theme.media2}) {
    grid-column: 3/4;
    grid-row: 2/3;
    position: sticky;
    top: 180px;
    margin-top: 2rem;
  }
`
export const Advert = styled.div`
  height: auto;
  padding: 8px;
  border-radius: var(--radius);
  background-color: var(--clr-green);
  text-align: left;
  p {
    color: var(--clr-white);
  }
`

export const Alert = styled.div`
  width: 90%;
  margin: 0 auto;
  p {
    color: ${({ color }) => color};
  }
`

export const Bottom = styled.div`
  /* display: none; */
  position: absolute;
  bottom: 0px;
  z-index: 50;
  height: auto;
  width: 100%;
  padding: 5px 0;
  background: var(--clr-white);
  box-shadow: 0px -1px 4px 0px rgba(161, 160, 160, 0.4);
  -webkit-box-shadow: 0px -1px 4px 0px rgba(161, 160, 160, 0.4);
  -moz-box-shadow: 0px -1px 4px 0px rgba(161, 160, 160, 0.4);
`

export const Box = styled.div`
  display: flex;
  align-items: ${({ baseline }) => (baseline ? "baseline" : "center")};
`
export const BoxItem = styled(Box)`
  width: 100%;
  margin: 5px auto;
  justify-content: space-between;
  span {
    color: var(--cl-grey-1);
  }
  svg {
    font-size: 1rem;
    color: var(--cl-grey-7);
  }
`

export const BoxLargeScreen = styled(Box)`
  display: none;
  a {
    width: 100%;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media2}) {
    display: flex;
    flex-direction: column;
  }
`
export const BoxLittleScreen = styled(Box)`
  display: block;
  @media only screen and (min-width: ${({ theme }) => theme.media2}) {
    display: none;
  }
`

export const BoxColumn = styled(Box)`
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding && "10px"};
  margin: auto;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: ${({ border }) => border && "1px solid #e2e4e4"};
  overflow: scroll;
`

export const Button = styled.div`
  height: 3rem;
  width: 90%;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  justify-content: ${({ j_c }) => j_c || "center"};
  border-radius: var(--radius);
  color: ${({ active }) => (active ? "#ffffff" : "#aaacac")};
  background: ${({ active }) => (active ? "#00ccbb" : "#e2e4e4")};
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
  span {
    font-weight: bold;
    margin: 0 30px 0 30px;
  }
`
export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  svg {
    color: var(--cl-grey-1);
    font-size: 1.5rem;
  }
`

export const Empty = styled.div`
  display: none;
  height: 14rem;
  background: var(--clr-white);
  box-shadow: 0px 0px 2px 0px rgba(202, 202, 202, 0.5);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(202, 202, 202, 0.5);
  -moz-box-shadow: 0px 0px 2px 0px rgba(202, 202, 202, 0.5);
  @media only screen and (min-width: ${({ theme }) => theme.mobile}) {
    display: block;
    width: 100%;
  }
`
export const Full = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 26rem;
  @media only screen and (max-width: ${({ theme }) => theme.media2}) {
    height: auto;
  }
`
export const Icon = styled.div`
  svg {
    color: var(--cl-grey-7);
    font-size: 3rem;
  }
`
export const Line = styled.div`
  height: 2rem;
  width: 100%;
  margin: 5px auto;
  border-bottom: 1px solid var(--clr-grey-3);
`

export const Scroll = styled.div`
  background: var(--clr-white);
  width: 100%; 
  height: 100vh; 
  position fixed; 
  top: 0; 
  padding: 10px; 
  margin-bottom: 5rem; 
  display: flex; 
  flex-direction: column; 
  overflow: scroll;
 

  display: ${({ display }) => display};
  @media only screen and
  (min-width: ${({ theme }) => theme.media2}) {
    position: relative; 
    display: flex;
    height: 20rem;

  }
`

export const Text = styled.span`
  color: ${({ color }) => color};
  background: ${({ bg_clr }) => bg_clr};
  padding: 0 5px;
  border-radius: var(--radius);
  font-weight: ${({ f_w }) => (f_w ? "bold" : "")};
`
export const TextStrike = styled.s`
  color: var(--cl-grey-1);
  font-size: 1rem;
  background: ${({ bg_clr }) => bg_clr};
  padding: 0 5px;
  border-radius: var(--radius);
  font-weight: ${({ f_w }) => (f_w ? "bold" : "")};
`

export const Title = styled.h3`
  color: ${({ color }) => color};
`
