import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginContainer } from "../containers/login"
import { Layout } from "../components"
import styled from "styled-components"

const Signin = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()

  const handleConnectClick = () => {
    loginWithRedirect()
  }

  const handleDisconnectClick = () => {
    logout({ logoutParams: { returnTo: process.env.AUTH0_CALLBACK } })
  }

  return (
    <Layout>
      <Wrapper>
        {!isAuthenticated && (
          <Button onClick={handleConnectClick}>Se Connecter</Button>
        )}
        {isAuthenticated && (
          <Button onClick={handleDisconnectClick}>Se Déconnecter</Button>
        )}

        <LoginContainer />
      </Wrapper>
    </Layout>
  )
}

export default Signin

const Wrapper = styled.main`
  /* min-height: 70vh; */
  height: auto;
  width: 40%;
  padding: 1rem;
  margin: 0 auto;
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
