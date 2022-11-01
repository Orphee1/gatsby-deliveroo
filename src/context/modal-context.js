import React, { useState } from "react"

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
  const [productShownOnModal, setProductShownOnModal] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <ModalContext.Provider
      value={{
        productShownOnModal,
        setProductShownOnModal,
        isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
