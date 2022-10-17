import { addTodo } from '../actionCreator';

const fetchTodos = (todoText) => async (dispatch) => {
    const response = await fetch('http://localhost:9000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            text: todoText,
            completed: false,
        }),
    });
    const todo = await response.json();

    dispatch(addTodo(todo.text));
};

export default fetchTodos;
