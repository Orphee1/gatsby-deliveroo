import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/cart-context"
import { Counter } from "../components"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

export const CounterContainer = ({
  id,
  price,
  title,
  toggleModal,
  onAddToTotalModal,
  onRemoveToTotalModal,
}) => {
  const [amount, setAmount] = useState(1)
  const { addProductToCart, removeProductFromCart } = useContext(CartContext)

  useEffect(() => {
    setAmount(1)
  }, [toggleModal])

  const handleAdd = (price, title, id) => {
    setAmount(amount + 1)
    onAddToTotalModal(+price)
    addProductToCart({
      title,
      price,
      id,
    })
  }

  const handleRemove = (price, title, id) => {
    if (amount > 1) {
      setAmount(amount - 1)
      onRemoveToTotalModal(+price)
      removeProductFromCart({
        title,
        price,
        id,
      })
    } else return
  }

  return (
    <Counter large>
      <Counter.Button
        color={`${amount > 1 ? "#00ccbb" : "#aaacac"}`}
        cursor={`${amount > 1 ? "pointer" : "default"}`}
        onClick={() => {
          handleRemove(price, title, id)
        }}
      >
        <FiMinusCircle />
      </Counter.Button>
      <Counter.Count>{amount}</Counter.Count>
      <Counter.Button
        color="#00ccbb"
        cursor="pointer"
        onClick={() => {
          handleAdd(price, title, id)
        }}
      >
        <FiPlusCircle />
      </Counter.Button>
    </Counter>
  )
}
