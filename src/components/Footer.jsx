/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeStatus } from '../redux/filters/actionCreator';

export default function Footer() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const { status, colors } = filters;
    const remainingTodos = todos.filter((todo) => !todo.completed).length;
    const dispatch = useDispatch();

    const numberOfTodos = (todoCount) => {
        if (todoCount > 1) {
            return `${todoCount} tasks `;
        }
        if (todoCount === 1) {
            return `${todoCount} task`;
        }
        if (todoCount === 0) {
            return 'No task';
        }
    };

    const handleStatusChange = (todoStatus) => {
        dispatch(changeStatus(todoStatus));
    };

    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(changeColor(color, 'remove'));
        } else {
            dispatch(changeColor(color, 'add'));
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(remainingTodos)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    className={`cursor-pointer ${status === 'all' ? 'font-bold' : null}`}
                    onClick={() => handleStatusChange('all')}
                >
                    All
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === 'incomplete' ? 'font-bold' : null}`}
                    onClick={() => handleStatusChange('incomplete')}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === 'complete' ? 'font-bold' : null}`}
                    onClick={() => handleStatusChange('complete')}
                >
                    Complete
                </li>
                <li />
                <li />
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                        colors.includes('green') && 'bg-green-500'
                    }`}
                    onClick={() => handleColorChange('green')}
                />
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
                        colors.includes('red') && 'bg-red-500'
                    }`}
                    onClick={() => handleColorChange('red')}
                />
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${
                        colors.includes('yellow') && 'bg-yellow-500'
                    }`}
                    onClick={() => handleColorChange('yellow')}
                />
            </ul>
        </div>
    );
}
