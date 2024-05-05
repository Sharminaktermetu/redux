import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {

  }
})

// Action creators are generated for each case reducer function
// export const {} = todoSlice.actions

export default todoSlice.reducer