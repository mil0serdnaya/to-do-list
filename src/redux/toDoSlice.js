import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDos',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: new Date(),
        text: action.payload.text,
        completed: false
      }
      state.push(toDo);
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(toDo => toDo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    }
  }
});

export const { addToDo, deleteToDo, toggleComplete } = toDoSlice.actions;
export default toDoSlice.reducer;