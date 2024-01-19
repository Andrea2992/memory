import { configureStore } from '@reduxjs/toolkit'
import click from './clickSlice'
import memoryCardList from './memoryCardsSlice';

const store = configureStore({
    reducer: {
      clicked: click,
      memoryCardList: memoryCardList
    },
  })


export default store;
export type IRootState = ReturnType<typeof store.getState>