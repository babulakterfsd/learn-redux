const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice');

// const { increment, decrement } = counterActions;
const { increment, decrement } = dynamicCounterActions;

store.subscribe(() => {
    store.getState();
});

console.log('state before dispatch: ', store.getState());

// store.dispatch(increment());
// store.dispatch(decrement());

store.dispatch(increment(5));
store.dispatch(increment(7));
store.dispatch(decrement(3));
store.dispatch(decrement(6));

console.log('state after dispatch: ', store.getState());
