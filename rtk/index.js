const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice');
const myThunkFunc = require('./post/myThunkFunc');

const { increment, decrement } = counterActions;
const { dIncrement, dDecrement } = dynamicCounterActions;

store.subscribe(() => {
    store.getState();
});

store.dispatch(myThunkFunc());
