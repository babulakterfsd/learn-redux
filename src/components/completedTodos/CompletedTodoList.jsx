import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../../redux/todos/thunk/fetchTodos';
import Todo from './CompletedTodo';

export default function CompletedTodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter((todo) => todo.completed)
                .map((todo) => (
                    <Todo todo={todo} key={Math.random() * 9999} />
                ))}
        </div>
    );
}
