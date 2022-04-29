import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState: {
    toDoItems: []
  },
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: new Date(),
        text: action.payload.text,
        completed: false
      }
      state.toDoItems.push(toDo);
    },
    deleteToDo: (state, action) => {
      return state.toDoItems.filter((toDo) => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      let index = state.toDoItems.findIndex(toDo => toDo.id === action.payload.id);
      state.toDoItems[index].completed = action.payload.completed;
    },
    editToDo: (state, action) => {
      let index = state.toDoItems.findIndex(toDo => toDo.id === action.payload.id);
      state.toDoItems[index].text = action.payload.newText;
    },
    setLocalStorage: (state, action) => {
      localStorage.setItem('toDoItems', JSON.stringify(state));
    },
    getLocalStorage: (state, action) => {
      let storage = localStorage.getItem('toDoItems');
      if (storage) {
        state.toDoItems = JSON.parse(storage);
      }
    }
  }
});

export const { addToDo, deleteToDo, toggleComplete, editToDo, getLocalStorage, setLocalStorage } = toDoSlice.actions;
export default toDoSlice.reducer;