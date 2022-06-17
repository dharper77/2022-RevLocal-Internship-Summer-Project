import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

export const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    logIn: state => (state.isLoggedIn = false),
    logOut: state => (state.isLoggedIn = true)
  }
})

// const logInReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'LOG_IN_ACTION':
//       return { ...state, isLoggedIn: true }
//     case 'LOG_OUT_ACTION':
//       return { ...state, isLoggedIn: false }
//   }
// }

export const { logIn, logOut } = logInSlice.actions
export default logInSlice.reducer
