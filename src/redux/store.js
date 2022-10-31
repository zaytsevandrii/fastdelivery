import { configureStore } from '@reduxjs/toolkit'
import filerSlice from './slices/filterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    filerSlice,
    cart,
  },
})
