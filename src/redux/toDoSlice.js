import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDos',
  initialState: [
    { id: 1, title: 'todo1', completed: false }
  ],
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: new Date(),
        text: action.payload.text,
        completed: false
      }
      state.push(toDo);
    }
  }
});

export const { addToDo } = toDoSlice.actions;
export default toDoSlice.reducer;