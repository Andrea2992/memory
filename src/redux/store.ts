import { configureStore } from '@reduxjs/toolkit'
import click from './clickSlice'

const store = configureStore({
    reducer: {
      clicked: click,
    },
  })


export default store;
export type IRootState = ReturnType<typeof store.getState>