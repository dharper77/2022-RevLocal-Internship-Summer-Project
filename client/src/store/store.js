import { configureStore } from '@reduxjs/toolkit'
import logInReducer from './reducers/logInReducer'

export const store = configureStore({
  reducer: {
    logIn: logInReducer
  }
})
