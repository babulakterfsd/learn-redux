import React, { useState } from 'react';

import Counter from '../components/Counter';
import TotalCount from '../components/TotalCount';

function Home() {
    const initialState = [
        {
            id: 1,
            count: 0,
        },
        {
            id: 2,
            count: 0,
        },
    ];
    const [state, setState] = useState(initialState);

    const increment = (id) => {
        const updateCounter = state.map((singleState) => {
            if (id === singleState.id) {
                return {
                    ...singleState,
                    count: singleState.count + 1,
                };
            }
            return { ...singleState };
        });
        setState(updateCounter);
    };

    const decrement = (id) => {
        const updateCounter = state.map((singleState) => {
            if (id === singleState.id) {
                return {
                    ...singleState,
                    count: singleState.count - 1,
                };
            }
            return { ...singleState };
        });
        setState(updateCounter);
    };

    const totalCount = state.reduce((total, current) => total + current.count, 0);

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            {state.map((singleState) => (
                <div key={singleState.id} className="h-24 bg-slate-400 rounded-md p-4 my-2">
                    <Counter
                        increment={increment}
                        decrement={decrement}
                        count={singleState.count}
                        id={singleState.id}
                    />
                </div>
            ))}
            <div className="mt-24">
                <TotalCount total={totalCount} />
            </div>
        </div>
    );
}

export default Home;
