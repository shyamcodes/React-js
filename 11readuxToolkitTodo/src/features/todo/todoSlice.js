import {createSlice, nanoid } from '@reduxjs/toolkit';


// important thing is first there is a initialState, ki store starting me kesa hoga.
// Will it be empty? Will there be any value inside it? or fetch some values from database. kuch na kuch to daloge.
// initial state can array and object also. its depends on you what you wnat to put.

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer