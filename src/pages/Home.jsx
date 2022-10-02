import React from 'react';
import ConlertWithReducer from '../components/ConlertWithReducer';
import CounterWithHooks from '../components/CounterWithHooks';

function Home() {
    return (
        <div className="h-screen flex justify-center items-center bg-slate-400 flex-col lg:flex-row">
            <CounterWithHooks />
            <ConlertWithReducer />
        </div>
    );
}

export default Home;
