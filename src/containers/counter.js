import React from "react"
import { Counter } from "../components"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

export const CounterContainer = ({
  addProduct,
  counter,
  id,
  price,
  removeProduct,
  setCounter,
  title,
}) => {
  return (
    <Counter large>
      <Counter.Button
        color={`${counter > 1 ? "#00ccbb" : "#aaacac"}`}
        cursor={`${counter > 1 ? "pointer" : "default"}`}
        onClick={() => {
          if (counter > 1) {
            setCounter(counter - 1)
            removeProduct({
              title: title,
              price: price,
              id: id,
            })
          }
        }}
      >
        <FiMinusCircle />
      </Counter.Button>
      <Counter.Count>{counter}</Counter.Count>
      <Counter.Button
        color="#00ccbb"
        cursor="pointer"
        onClick={() => {
          setCounter(counter + 1)
          addProduct({
            title: title,
            price: price,
            id: id,
          })
        }}
      >
        <FiPlusCircle />
      </Counter.Button>
    </Counter>
  )
}
