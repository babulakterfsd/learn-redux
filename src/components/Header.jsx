/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import tickImage from '../assets/images/double-tick.png';
import noteImage from '../assets/images/notes.png';
import { clearCompleted, completeAll } from '../redux/todos/actionCreator';

import addNewTodo from '../redux/todos/thunk/addNewTodo';

export default function Header() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(input));
        setInput('');
    };

    const completeAllTodos = () => {
        dispatch(completeAll());
    };

    const clearCompletedTodos = () => {
        dispatch(clearCompleted());
    };

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={submitHandler}
            >
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    className="bg-red-300 text-yellow-600 h-10 w-10 rounded-md font-bold text-2xl"
                >
                    +
                </button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={() => completeAllTodos()}>
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={() => clearCompletedTodos()}>
                    Clear completed
                </li>
            </ul>
        </div>
    );
}
