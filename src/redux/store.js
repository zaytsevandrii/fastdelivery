import { configureStore } from '@reduxjs/toolkit'
import filerSlice from './slices/filterSlice'
import cart from './slices/cartSlice'
import food from './slices/foodSlice'

export const store = configureStore({
  reducer: {
    filerSlice,
    cart,
    food
  },
})
