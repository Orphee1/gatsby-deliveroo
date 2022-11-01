import React, { useReducer } from "react"

const CartContext = React.createContext()

const defaultState = {
  items: [],
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    )
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: (existingCartItem.quantity += 1),
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      const newItem = { ...action.item }
      newItem.quantity = 1
      updatedItems = state.items.concat(newItem)
    }

    return { items: updatedItems, totalAmount: state.totalAmount }
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    )
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems
    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter(item => item.id !== action.item.id)
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return { items: updatedItems, totalAmount: state.totalAmount }
  }
  return defaultState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
  const addProductToCart = item => {
    dispatchCartAction({ type: "ADD_ITEM", item })
  }
  const removeProductFromCart = item => {
    dispatchCartAction({ type: "REMOVE_ITEM", item })
  }

  // console.log(cartState)

  const { quantity, subTotal } = cartState.items.reduce(
    (acc, product) => {
      acc.subTotal += product.price * product.quantity
      acc.quantity += product.quantity
      return acc
    },
    {
      quantity: 0,
      subTotal: 0,
    }
  )

  let deliveryFee = 1.99
  let serviceFee = 0.79
  let additionalFee = 0.1

  return (
    <CartContext.Provider
      value={{
        additionalFee,
        deliveryFee,
        serviceFee,
        addProductToCart,
        removeProductFromCart,
        subTotal,
        quantity,
        cart: cartState.items,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
