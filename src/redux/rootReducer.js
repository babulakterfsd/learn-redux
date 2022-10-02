import { combineReducers } from 'redux';
import conlertReducer from './conlert/conlertReducer';
import counterReducer from './counter/counterReducer';

const rootReducer = combineReducers({
    conlert: conlertReducer,
    counter: counterReducer,
});

export default rootReducer;
