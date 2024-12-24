import { createSlice, nanoid } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
        isCompleted: false,
      };
      if (newTodo.title === "") {
        return state;
      }
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
    toggleTodo: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
