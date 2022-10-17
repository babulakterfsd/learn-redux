import { selectColor } from '../actionCreator';

const updateColor = (todoID, color) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            color,
        }),
    });
    const todo = await response.json();

    dispatch(selectColor(todo.id, todo.color));
};

export default updateColor;
