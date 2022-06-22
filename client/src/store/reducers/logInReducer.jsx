import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false
}

export const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = true
    },
    logOut: state => {
      state.isLoggedIn = false
    }
  }
})

export const { logIn, logOut } = logInSlice.actions
export default logInSlice.reducer
