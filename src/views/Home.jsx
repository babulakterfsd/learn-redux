import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../rtk/features/testSlice';
import fetchTodos from '../rtk/features/thunk/fetchTodos';

function Home() {
    const test = useSelector((state) => state.test);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-2xl text-yellow-900">{test?.person?.name}</p>
            <p className="text-xl text-yellow-900 mt-2">{test?.person?.age}</p>
            <button
                type="button"
                className="text-pink-600 bg-pink-300 rounded-md p-2"
                onClick={() => dispatch(increase(5))}
            >
                Increase
            </button>

            {test.loading === true ? (
                <p className="text-xl text-red-600 mt-3 font-semibold">Loading..</p>
            ) : (
                test.todos.map((todo) => <p key={todo.id}>{todo.title}</p>)
            )}
        </div>
    );
}

export default Home;
