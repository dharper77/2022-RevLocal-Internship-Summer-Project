import { configureStore } from '@reduxjs/toolkit'
import logInReducer from './reducers/logInReducer'
import selectCategoriesReducer from './reducers/selectCategoriesReducer'
import cartReducer from './reducers/cartReducer'
import postNewProductReducer from './reducers/postNewProductReducer'
import pageReducer from './reducers/pageReducer'

export const store = configureStore({
  reducer: {
    logIn: logInReducer,
    selectedCategories: selectCategoriesReducer,
    cart: cartReducer,
    newProductListingDraft: postNewProductReducer,
    page: pageReducer
  }
})
