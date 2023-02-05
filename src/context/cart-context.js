import React, { useReducer } from "react"

const CartContext = React.createContext()

const fees = {
  delivery: 1.99,
  service: 0.79,
  additional: 0.1,
}

const defaultState = {
  items: [],
  quantity: 0,
  subTotal: 0,
  tips: 0,
  total: 0,
}

const handleReduce = arr => {
  const { updatedQuantity, updatedSubTotal } = arr.reduce(
    (acc, product) => {
      acc.updatedSubTotal += product.price * product.quantity
      acc.updatedQuantity += product.quantity
      return acc
    },
    {
      updatedQuantity: 0,
      updatedSubTotal: 0,
    }
  )
  return { quant: updatedQuantity, total: updatedSubTotal }
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

    const updatedQuantityAndTotal = handleReduce(updatedItems)

    return {
      items: updatedItems,
      quantity: updatedQuantityAndTotal.quant,
      subTotal: updatedQuantityAndTotal.total,
      tips: state.tips,
      total: updatedQuantityAndTotal.total + state.tips,
    }
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
    const updatedQuantityAndTotal = handleReduce(updatedItems)
    return {
      items: updatedItems,
      quantity: updatedQuantityAndTotal.quant,
      subTotal: updatedQuantityAndTotal.total,
      tips: state.tips,
      total: updatedQuantityAndTotal.total + state.tips,
    }
  }
  if (action.type === "ADD_TIPS") {
    const updatedTips = state.tips + 1
    return { ...state, tips: updatedTips, total: state.subTotal + updatedTips }
  }
  if (action.type === "REMOVE_TIPS") {
    if (state.tips > 0) {
      const updatedTips = state.tips - 1
      return {
        ...state,
        tips: updatedTips,
        total: state.subTotal + updatedTips,
      }
    } else {
      return state
    }
  }
  return defaultState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
  console.log(cartState)
  const addProductToCart = item => {
    dispatchCartAction({ type: "ADD_ITEM", item })
  }
  const removeProductFromCart = item => {
    dispatchCartAction({ type: "REMOVE_ITEM", item })
  }

  const addTips = () => {
    dispatchCartAction({ type: "ADD_TIPS" })
  }
  const removeTips = () => {
    dispatchCartAction({ type: "REMOVE_TIPS" })
  }

  const total = cartState.total + fees.additional + fees.delivery + fees.service
  const restToOffer = 12 - cartState.subTotal
  const deliveryOffer = restToOffer > 0 ? false : true

  // console.log(cartState)
  const cartContext = {
    additionalFee: fees.additional,
    deliveryFee: fees.delivery,
    serviceFee: fees.service,
    addProductToCart,
    removeProductFromCart,
    addTips,
    removeTips,
    cart: cartState.items,
    quantity: cartState.quantity,
    subTotal: cartState.subTotal,
    tips: cartState.tips,
    total,
    restToOffer,
    offered: deliveryOffer,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export { CartContext, CartProvider }
