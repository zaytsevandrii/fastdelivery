import { configureStore } from '@reduxjs/toolkit'
import filerSlice from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    filerSlice
  },
})
