import React from "react"

const LoginContext = React.createContext(false)

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const handleIsLogin = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn)
  }

  const loggedInContext = {
    isLoggedIn,
    handleIsLogin,
  }

  return (
    <LoginContext.Provider value={loggedInContext}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider }
