import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  subtotal: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.subtotal += action.payload.price * action.payload.quantity
      const found = state.cart.find(el => el.product === action.payload.product)
      found
        ? (found.quantity += action.payload.quantity)
        : state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.subtotal -= action.payload.price * action.payload.quantity
      state.cart = state.cart.filter(
        el => el.product !== action.payload.product
      )
    },
    incrementQuantity: (state, action) => {
      state.subtotal += action.payload.price
      const itemInCart = state.cart.find(
        el => el.product === action.payload.product
      )
      itemInCart.quantity++
    },
    decrementQuantity: (state, action) => {
      state.subtotal -= action.payload.price
      const itemInCart = state.cart.find(
        el => el.product === action.payload.product
      )
      itemInCart.quantity--
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions

export default cartSlice.reducer
