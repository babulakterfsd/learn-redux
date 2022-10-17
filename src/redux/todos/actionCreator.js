/* eslint-disable prettier/prettier */
import {
    ADD_TODO, CLEAR_COMPLETED,
    COMPLETE_ALL,
    DELETE_TODO, LOAD_TODO, SELECT_COLOR,
    TOGGLE_TODO
} from './actionTypes';

export const addTodo = (todoText) => ({
    type: ADD_TODO,
    payload: todoText,
});

export const loadTodo = (todos) => ({
    type: LOAD_TODO,
    payload: todos,
});

export const toggleTodo = (todoID) => ({
    type: TOGGLE_TODO,
    payload: todoID,
});

export const selectColor = (todoID, color) => ({
    type: SELECT_COLOR,
    payload: {
        todoID,
        color,
    },
});

export const deleteTodo = (todoID) => ({
    type: DELETE_TODO,
    payload: todoID,
});

export const completeAll = () => ({
    type: COMPLETE_ALL,
});

export const clearCompleted = () => ({
    type: CLEAR_COMPLETED,
});
