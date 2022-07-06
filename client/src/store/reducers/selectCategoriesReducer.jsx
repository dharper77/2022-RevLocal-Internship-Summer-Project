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
    },
    resetCategories: state => {
      state.selectedCategories = []
    }
  }
})

export const {
  selectCategory,
  unselectCategory,
  resetCategories
} = selectCategorySlice.actions

export default selectCategorySlice.reducer
