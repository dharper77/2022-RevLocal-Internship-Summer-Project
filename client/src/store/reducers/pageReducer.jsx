import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  totalPages: 1
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setTotalPages: (state, action) => {
        state.totalPages = action.payload
    },
    toPreviousPage: state => {
        if (state.page > 1) { 
            state.page-- 
        }
    },
    toNextPage: state => {
        if (state.page < state.totalPagess) {
            state.page++
        }
    }
  }
})

export const { setTotalPages, toPreviousPage, toNextPage } = pageSlice.actions
export default pageSlice.reducer
