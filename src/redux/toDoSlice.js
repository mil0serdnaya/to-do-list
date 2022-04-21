import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDos',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: new Date(),
        text: action.payload.text,
        completed: false,
        isEditing: false
      }
      state.push(toDo);
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      let index = state.findIndex(toDo => toDo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    editToDo: (state, action) => {
      let index = state.findIndex(toDo => toDo.id === action.payload.id);
      state[index].isEditing = action.payload.isEditing;
      state[index].text = action.payload.newText;
    }
  }
});

export const { addToDo, deleteToDo, toggleComplete, editToDo } = toDoSlice.actions;
export default toDoSlice.reducer;