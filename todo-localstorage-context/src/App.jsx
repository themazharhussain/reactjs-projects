import React, { useState, useEffect } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoContextProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  //load todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // set todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }]);
  };

  //delete todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };

  //edit todo
  const editTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) => (eachTodo.id === id ? updatedTodo : eachTodo))
    );
  };

  // toggle isCompleted
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>eachTodo.id === id ? { ...eachTodo, isCompleted: true} : eachTodo
      )
    );
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, toggleTodo, editTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((eachTodo) => (
              <div className="w-full" key={eachTodo.id}>
                <TodoItem todo={eachTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
