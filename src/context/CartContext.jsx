import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      )
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id && item.selectedSize === existingItem.selectedSize
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter((item) => item.quantity > 0),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addToCart = (product, selectedSize = null) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, selectedSize } })
  }

  const removeFromCart = (id, selectedSize = null) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, selectedSize } })
  }

  const updateQuantity = (id, quantity, selectedSize = null) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, selectedSize } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const cartItemsCount = state.items.reduce((acc, item) => acc + item.quantity, 0)
  const cartTotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
