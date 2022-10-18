/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux';
import updateStatus from '../../redux/todos/thunk/updateTodoStatus';

export default function CompletedTodo({ todo }) {
    const { id, text, completed } = todo;
    const dispatch = useDispatch();

    const handleToggle = (todoID) => {
        dispatch(updateStatus(todoID, completed));
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed && 'border-green-500 focus-within:border-green-500'
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleToggle(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            <div className={`select-none flex-1 ${!completed && 'line-through'}`}>{text}</div>
        </div>
    );
}
