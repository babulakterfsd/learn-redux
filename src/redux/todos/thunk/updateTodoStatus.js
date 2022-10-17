import { toggleTodo } from '../actionCreator';

const updateStatus = (todoID, currentStatus) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            completed: !currentStatus,
        }),
    });
    const todo = await response.json();

    dispatch(toggleTodo(todo.id));
};

export default updateStatus;
