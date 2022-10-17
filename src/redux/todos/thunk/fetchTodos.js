import { loadTodo } from '../actionCreator';

const fetchTodos = async (dispatch) => {
    // parameter er dispatch ta thunkmiddleware nije vore dicche, aager tutorial e sikhechi

    const response = await fetch('http://localhost:9000/todos');
    const data = await response.json();

    dispatch(loadTodo(data));
};

export default fetchTodos;
