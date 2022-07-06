import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const found = state.cart.find(el => el.product === action.payload.product)
      found
        ? (found.quantity += action.payload.quantity)
        : state.cart.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
