/* eslint-disable no-unused-vars */
import { deleteTodo } from '../actionCreator';

const deleteTodoFromDB = (todoID) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoID}`, {
        method: 'DELETE',
    });

    dispatch(deleteTodo(todoID));
};

export default deleteTodoFromDB;
