import { createSlice } from '@reduxjs/toolkit'

const styleSlice = createSlice({
  name: 'style',
  initialState: {
    bgColor: "white",
  },
  reducers: {
    changeBgColor: (state, action) => {
        state.bgColor = action.payload
    }
  },
})

export const selectStyle = (state) => state.style

export const {
    changeBgColor
} = styleSlice.actions


export default styleSlice.reducer
