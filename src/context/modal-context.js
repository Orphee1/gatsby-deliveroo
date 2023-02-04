import React, { useState } from "react"

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
  const [productShownOnModal, setProductShownOnModal] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  const modalContext = {
    productShownOnModal,
    setProductShownOnModal,
    isModalOpen,
    toggleModal,
  }

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
