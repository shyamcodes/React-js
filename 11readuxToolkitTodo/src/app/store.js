import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    //we can add more reducers like this.
    reducer: todoReducer
})