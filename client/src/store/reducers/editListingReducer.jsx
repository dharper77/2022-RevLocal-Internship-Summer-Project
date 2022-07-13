import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
}

export const editProductListingSlice = createSlice({
  name: 'editProductListingDraft',
  initialState,
  reducers: {
    setAllProps: (state, action) => {
      state.title = action.payload.title
      state.price = action.payload.price
      state.description = action.payload.description
      state.category = action.payload.category
      state.image = action.payload.image
    },
    setTitle: (state, action) => {
      state.title = action.payload.title
    },
    setPrice: (state, action) => {
      state.price = action.payload.price
    },
    setDescription: (state, action) => {
      state.description = action.payload.description
    },
    setCategory: (state, action) => {
      state.category = action.payload.category
    },
    setImage: (state, action) => {
      state.image = action.payload.image
    }
  }
})

export const {
  setAllProps,
  setTitle,
  setPrice,
  setDescription,
  setCategory,
  setImage
} = editProductListingSlice.actions

export default editProductListingSlice.reducer
