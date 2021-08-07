import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productsSlice from '../features/shop/productsSlice'

export default configureStore({
  products : [],
  reducer: {
    counter: counterReducer,
    products : productsSlice,
  }
})