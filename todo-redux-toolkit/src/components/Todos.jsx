import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-lg mx-auto mt-6 w-full">
      {todos.length > 0 ? (
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="w-5 h-5 text-blue-500 outline-none"
                />
                <p
                  className={`text-gray-700 text-lg font-medium ${
                    todo.isCompleted && "line-through"
                  }`}
                >
                  {todo.title}
                </p>
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="Delete"
              >
                &#128465;
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-4">No todos found!</p>
      )}
    </div>
  );
}

export default Todos;
