import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <h1 className="text-4xl font-bold text-blue-500 py-4">Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
