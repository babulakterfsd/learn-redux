import React from 'react';
import ConlertWithReducer from '../components/ConlertWithReducer';
import CounterWithHooks from '../components/CounterWithHooks';

function Home() {
    return (
        <div className="h-screen flex justify-center items-center bg-slate-400 flex-col lg:flex-row">
            {/* <Counter type={false} /> */}
            <CounterWithHooks />
            <ConlertWithReducer />
        </div>
    );
}

export default Home;
