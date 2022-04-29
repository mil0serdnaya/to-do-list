import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './toDoSlice';

export default configureStore({
  reducer: {
    toDoList: toDoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});