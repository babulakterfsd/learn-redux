import rootReducer from '../rootReducer';

const myLogger = (store) => (next) => (action) => {
    console.log('Babuls custom logger: ', action);
    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log('upcoming state: ', upcomingState);
    next(action);
};

export default myLogger;
