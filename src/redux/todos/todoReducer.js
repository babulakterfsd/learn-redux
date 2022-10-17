/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import {
    ADD_TODO,
    CLEAR_COMPLETED,
    COMPLETE_ALL,
    DELETE_TODO,
    LOAD_TODO,
    SELECT_COLOR,
    // eslint-disable-next-line prettier/prettier
    TOGGLE_TODO
} from './actionTypes';

const initialState = [];

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
    return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                },
            ];
        case LOAD_TODO:
            return [...action.payload];

        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });

        case SELECT_COLOR:
            const { todoID, color } = action.payload;
            return state.map((todo) => {
                if (todo.id === todoID) {
                    return {
                        ...todo,
                        color,
                    };
                }
                return todo;
            });

        case DELETE_TODO:
            const remainingTodos = state.filter((todo) => todo.id !== action.payload);
            return remainingTodos;

        case COMPLETE_ALL:
            return state.map((todo) => ({
                ...todo,
                completed: true,
            }));

        case CLEAR_COMPLETED:
            return state.filter((todo) => !todo.completed); // jegula completed na, segulai return hoye state e joma thakbe

        default:
            return state;
    }
};

export default todoReducer;
