import React, { useContext } from "react"
import { LoginContext } from "../context/login-context"
import { Layout } from "../components"
import styled from "styled-components"

const Signin = () => {
  const { isLoggedIn, handleIsLogin } = useContext(LoginContext)

  const handleClick = () => {
    handleIsLogin()
  }

  return (
    <Layout>
      <Wrapper>
        <h1>Hello from Signin Page</h1>
        {isLoggedIn ? (
          <Button onClick={handleClick}>Se déconnecter</Button>
        ) : (
          <Button onClick={handleClick}>Se connecter</Button>
        )}
      </Wrapper>
    </Layout>
  )
}

export default Signin

const Wrapper = styled.main`
  /* min-height: 70vh; */
  height: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  width: auto;
  margin: 2rem auto;
  padding: 1rem 2rem;
  border: 1px solid black;
  border-radius: var(--radius);
  color: black;
  background: white;
  outline: none;
  cursor: pointer;
`
