import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoItems: [],
  visibilityFilter: 'ALL',
};

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.toDoItems.push(newToDo);
    },
    deleteToDo: (state, action) => {
      state.toDoItems = state.toDoItems.filter(toDo => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const toDo = state.toDoItems.find(toDo => toDo.id === action.payload.id);
      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
    editToDo: (state, action) => {
      const toDo = state.toDoItems.find(toDo => toDo.id === action.payload.id);
      if (toDo) {
        toDo.text = action.payload.newText;
      }
    },
    setLocalStorage: (state) => {
      localStorage.setItem('toDoList', JSON.stringify(state));
    },
    setInitialState: (state, action) => {
      state.toDoItems = action.payload.toDoItems;
      state.visibilityFilter = action.payload.visibilityFilter;
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
  },
});

export const { 
  addToDo, 
  deleteToDo, 
  toggleComplete, 
  editToDo, 
  setLocalStorage, 
  setInitialState, 
  setVisibilityFilter 
} = toDoSlice.actions;

export default toDoSlice.reducer;
