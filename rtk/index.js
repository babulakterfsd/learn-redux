const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice');

const { increment, decrement } = counterActions;
const { dIncrement, dDecrement } = dynamicCounterActions;

store.subscribe(() => {
    store.getState();
});

store.dispatch(increment(5));
