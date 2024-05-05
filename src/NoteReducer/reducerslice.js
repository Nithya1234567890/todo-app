import { createSlice, nanoid } from "@reduxjs/toolkit";

const availableTodos=localStorage.getItem('todos');
const initialState={
    todos:availableTodos ? JSON.parse(availableTodos) : []
}

const reducerslice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload,
                completed:false
            }
            state.todos.push(todo);
            localStorage.setItem('todos',JSON.stringify(state.todos));
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
            localStorage.setItem('todos',JSON.stringify(state.todos));
        },
        updateTodo:(state,action)=>{
            const {id,newtext}=action.payload;
            const newtodo={
                id:id,
                text:newtext,
                completed:false
            }
            state.todos=state.todos.map((todo)=>(todo.id === id)?newtodo:todo )
            localStorage.setItem('todos',JSON.stringify(state.todos));
        },
        toggleTodo:(state,action)=>{
            state.todos=state.todos.map(todo=> todo.id===action.payload ? {...todo,completed : !todo.completed} : todo )
            localStorage.setItem('todos',JSON.stringify(state.todos));
        }
    }
})

export const {addTodo,deleteTodo,updateTodo,toggleTodo}=reducerslice.actions;

export default reducerslice.reducer;