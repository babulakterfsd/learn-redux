import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert, showConsole } from '../redux/conlert/actionCreators';

function ConlertWithReducer() {
    const count = useSelector((state) => state.conlert.value || 'Guest');
    const dispatch = useDispatch();

    const alertHandler = (value) => {
        dispatch(showAlert(value));
    };
    const consoleHandler = (value) => {
        dispatch(showConsole(value));
    };

    return (
        <div>
            <div className="counter flex justify-center items-center flex-col bg-white px-3 py-6 rounded-md shadow-md w-72 lg:w-96 mb-6 mx-3">
                <h1 className="text-xl font-bold text-slate-400 mb-3">{count}</h1>
                <div className="button-container flex w-full justify-around">
                    <div>
                        <button
                            type="button"
                            className="increment bg-indigo-400 text-white p-2 rounded-md"
                            onClick={() => alertHandler('Babul Akter')}
                        >
                            Alert Name
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="decrement bg-red-400 text-white p-2 rounded-md"
                            onClick={() => consoleHandler('Babul Akter')}
                        >
                            Console Name
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConlertWithReducer;
