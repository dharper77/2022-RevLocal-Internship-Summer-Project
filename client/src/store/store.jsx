import { configureStore } from '@reduxjs/toolkit'
import logInReducer from './reducers/logInReducer'
import selectCategoriesReducer from './reducers/selectCategoriesReducer'

export const store = configureStore({
  reducer: {
    logIn: logInReducer,
    selectedCategories: selectCategoriesReducer
  }
})
