import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement } from '../redux/counter/actionCreators';

function CounterWithHooks() {
    const count = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(counterIncrement(value));
    };
    const decrementHandler = (value) => {
        dispatch(counterDecrement(value));
    };

    return (
        <div className="h-screen flex justify-center items-center flex-col bg-slate-400">
            <div className="counter flex justify-center items-center flex-col bg-white px-3 py-6 rounded-md shadow-md w-72 lg:w-96 mb-6 mx-3">
                <h1 className="text-xl font-bold text-slate-400 mb-3">{count}</h1>
                <div className="button-container flex w-full justify-around">
                    <div>
                        <button
                            type="button"
                            className="increment bg-indigo-400 text-white p-2 rounded-md"
                            onClick={() => incrementHandler(7)}
                        >
                            Increment
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="decrement bg-red-400 text-white p-2 rounded-md"
                            onClick={() => decrementHandler(5)}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterWithHooks;
