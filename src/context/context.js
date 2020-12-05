import React, { useState } from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [product, setProduct] = useState({})

  return (
    <GatsbyContext.Provider value={{ product, setProduct }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
