import { configureStore } from '@reduxjs/toolkit'

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'
import notesReducer from './lib/slices/notesSlice'
import styleReducer from './lib/slices/styleSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    notes: notesReducer,
    style: styleReducer,
  },
  devTools: true,
})
