/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tickImage from '../../assets/images/double-tick.png';
import { clearCompleted } from '../../redux/todos/actionCreator';
import fetchTodos from '../../redux/todos/thunk/fetchTodos';
import Todo from './CompletedTodo';

export default function CompletedTodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const clearCompletedTodos = () => {
        dispatch(clearCompleted());
    };

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            <div className="flex space-x-1 justify-end text-xs my-2">
                <img className="w-4 h-4" src={tickImage} alt="Complete" />
                <span className="cursor-pointer" onClick={() => clearCompletedTodos()}>
                    Clear completed
                </span>
            </div>
            <hr className="mt-6" />
            {todos
                .filter((todo) => todo.completed)
                .map((todo) => (
                    <Todo todo={todo} key={Math.random() * 9999} />
                ))}
        </div>
    );
}
