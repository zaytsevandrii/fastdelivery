import { configureStore } from '@reduxjs/toolkit'
import pizdaLuba from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    coun:pizdaLuba
  },
})
