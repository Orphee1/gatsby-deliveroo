import React, { useState, useContext, useEffect, createContext } from "react"
import { GatsbyContext } from "../../context/context"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

import {
  Banner,
  Bottom,
  Button,
  ButtonLarge,
  Card,
  Container,
  DuoContainer,
  Icon,
  ImageContainer,
  InfoContainer,
  ItemContainer,
  Scroll,
  Text,
  Title,
} from "./styles/modal"

const CounterContext = createContext()

export function Modal({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}

Modal.Banner = function ModalBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children} </Banner>
}

Modal.Bottom = function ModalBottom({ children, ...restProps }) {
  return <Bottom {...restProps}>{children} </Bottom>
}

Modal.Button = function ModalButton({ children, ...restProps }) {
  return <Button {...restProps}>{children} </Button>
}

Modal.ButtonLarge = function ModalButtonLarge({ children, ...restProps }) {
  return <ButtonLarge {...restProps}>{children} </ButtonLarge>
}

Modal.Card = function ModalCard({ children, ...restProps }) {
  return <Card>{children} </Card>
}

Modal.DuoContainer = function ModalDuoContainer({ children, ...restProps }) {
  return <DuoContainer>{children} </DuoContainer>
}

Modal.Icon = function ModalIcon({ children, id, title, price, toggleModal }) {
  const { counter, setCounter } = useContext(CounterContext)
  const { addProduct, removeProduct } = useContext(GatsbyContext)
  useEffect(() => {
    setCounter(0)
  }, [toggleModal])

  return (
    <Icon>
      {counter > 0 ? (
        <>
          <FiMinusCircle
            style={{ color: "#00ccbb", marginRight: "5px" }}
            onClick={() => {
              if (counter > 0) {
                setCounter(counter => counter - 1)
                removeProduct({
                  title: title,
                  price: +price,
                  id: id,
                })
              }
            }}
          />
          <Text>{counter}</Text>
          <FiPlusCircle
            style={{ color: "#00ccbb", marginLeft: "5px" }}
            onClick={() => {
              setCounter(counter => counter + 1)
              addProduct({
                title: title,
                price: +price,
                id: id,
              })
            }}
          />
        </>
      ) : (
        <FiPlusCircle
          onClick={() => {
            setCounter(counter => counter + 1)
            addProduct({
              title: title,
              price: +price,
              id: id,
            })
          }}
        />
      )}
    </Icon>
  )
}

Modal.ImageContainer = function ModalImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer>{children}</ImageContainer>
}

Modal.InfoContainer = function ModalInfoContainer({ children, ...restProps }) {
  return <InfoContainer>{children}</InfoContainer>
}

Modal.ItemContainer = function ModalItemContainer({ children, ...restProps }) {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <ItemContainer>{children}</ItemContainer>
    </CounterContext.Provider>
  )
}

Modal.Scroll = function ModalScroll({ children, ...restProps }) {
  return <Scroll {...restProps}>{children}</Scroll>
}

Modal.Text = function ModalText({ children, ...restProps }) {
  return <Text>{children}</Text>
}

Modal.Title = function ModalTitle({ children, ...restProps }) {
  return <Title>{children}</Title>
}
