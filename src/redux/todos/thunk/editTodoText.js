import { editText } from '../actionCreator';

const editTodoText = (todoID, text) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            text,
        }),
    });
    const todo = await response.json();

    dispatch(editText(todo.id, todo.text));
};

export default editTodoText;
