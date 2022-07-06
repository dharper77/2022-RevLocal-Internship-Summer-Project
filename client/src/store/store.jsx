import { configureStore } from '@reduxjs/toolkit'
import logInReducer from './reducers/logInReducer'
import selectCategoriesReducer from './reducers/selectCategoriesReducer'
import cartReducer from './reducers/cartReducer'

export const store = configureStore({
  reducer: {
    logIn: logInReducer,
    selectedCategories: selectCategoriesReducer,
    cart: cartReducer
  }
})
