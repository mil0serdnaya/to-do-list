import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './toDoSlice';

export default configureStore({
  reducer: {
    toDos: toDoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});