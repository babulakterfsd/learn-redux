import React from 'react';
import { connect } from 'react-redux';
import { counterDecrement, counterIncrement } from '../redux/counter/actionCreators';

function Counter({ count, compType, increment, decrement }) {
    return (
        <div className="h-screen flex justify-center items-center flex-col bg-slate-400">
            <div className="counter flex justify-center items-center flex-col bg-white px-3 py-6 rounded-md shadow-md w-72 lg:w-96 mb-6 mx-3 h-44">
                <h1 className="text-xl font-bold text-slate-400 mb-3">{count}</h1>
                <div className="button-container flex w-full justify-around">
                    <div>
                        <button
                            type="button"
                            className="increment bg-indigo-400 text-white p-2 rounded-md"
                            onClick={() => increment(7)}
                        >
                            Increment
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="decrement bg-red-400 text-white p-2 rounded-md"
                            onClick={() => decrement(5)}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
                <small className="mt-4 text-semibold text-slate-400">
                    (This component is connected with redux with the connect api and has ownProps
                    like {compType})
                </small>
            </div>
        </div>
    );
}

/* 
lecture 2.8 e khub shundor kore ownProps er use dekhano hoyeche. ownProps er upor amra logical condition use kore state er value ta return korte pari. jemon : 

const mapStateToProps = (state) => ({
    count: ownProps.somethingPropsPassed ? ownProps.somethingPropsPassed || state.value,
});

ekoivabe mapStateToProp er moddhe ownProps er value ta use kora jay.
*/

const mapStateToProps = (state, ownProps) => ({
    count: !ownProps.type ? state.counter.value : 'no props passed',
    compType: ownProps.type,
});

const mapDispatchToProps = (dispatch) => ({
    increment: (value) => dispatch(counterIncrement(value)),
    decrement: (value) => dispatch(counterDecrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
