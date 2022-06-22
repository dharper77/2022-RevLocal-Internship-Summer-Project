import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategories: []
}

export const selectCategorySlice = createSlice({
  name: 'selectedCategories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategories.push(action.payload)
    },
    unselectCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        el => el !== action.payload
      )
    }
  }
})

export const { selectCategory, unselectCategory } = selectCategorySlice.actions
export default selectCategorySlice.reducer
