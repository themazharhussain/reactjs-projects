import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id:1,
        title:"jogging",
        isCompleted:false
    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=> {},
    editTodo:(id,todo)=>{}
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider