import React from "react"
import { FooterContainer, NavBarContainer } from "../containers"

const Layout = ({ children }) => {
  return (
    <>
      <NavBarContainer />
      {children}
      <FooterContainer />
    </>
  )
}

export default Layout
