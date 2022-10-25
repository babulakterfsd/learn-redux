import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../rtk/features/testSlice';

function Home() {
    const test = useSelector((state) => state.test);
    const dispatch = useDispatch();

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-2xl text-yellow-900">{test?.name}</p>
            <p className="text-xl text-yellow-900 mt-2">{test.age}</p>
            <button
                type="button"
                className="text-pink-600 bg-pink-300 rounded-md p-2"
                onClick={() => dispatch(increase(5))}
            >
                Increase
            </button>
        </div>
    );
}

export default Home;
