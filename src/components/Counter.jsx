import React from 'react';

function Counter({ increment, decrement, count, id }) {
    return (
        <div>
            <p>Count is : {count}</p>
            <button
                className="m-2 bg-indigo-400 text-indigo-900 rounded-md p-2"
                type="button"
                onClick={() => increment(id)}
            >
                increment
            </button>
            <button
                className="m-2 bg-indigo-400 text-indigo-900 rounded-md p-2"
                type="button"
                onClick={() => decrement(id)}
            >
                decrement
            </button>
        </div>
    );
}

export default Counter;
